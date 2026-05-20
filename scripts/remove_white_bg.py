#!/usr/bin/env python3
"""Remove near-white or uniform corner backgrounds; save as RGBA PNG."""

from pathlib import Path

from PIL import Image
import numpy as np

IMAGES_DIR = Path(__file__).resolve().parent.parent / "images"
SKIP = {"profile.png"}
ONLY_PREFIXES = ("colonoscope-distal-tip-", "insulin-syringe-buildup-")
WHITE_THRESHOLD = 238
WHITE_SOFTNESS = 18
DARK_TOLERANCE = 42
DARK_SOFTNESS = 12


def soften_alpha(mask: np.ndarray, softness: float) -> np.ndarray:
    """mask: 0 = transparent, 255 = opaque."""
    return np.clip(mask.astype(np.float32), 0, 255).astype(np.uint8)


def remove_white_background(arr: np.ndarray) -> np.ndarray:
    rgb = arr[:, :, :3].astype(np.float32)
    # Distance from pure white (per-channel min distance)
    dist = 255.0 - np.min(rgb, axis=2)
    alpha = np.clip((dist - (255 - WHITE_THRESHOLD)) * (255.0 / WHITE_SOFTNESS), 0, 255)
    out = arr.copy()
    out[:, :, 3] = soften_alpha(alpha, WHITE_SOFTNESS)
    return out


def remove_uniform_background(arr: np.ndarray) -> np.ndarray:
    h, w = arr.shape[:2]
    corners = np.array(
        [
            arr[0, 0, :3],
            arr[0, w - 1, :3],
            arr[h - 1, 0, :3],
            arr[h - 1, w - 1, :3],
        ],
        dtype=np.float32,
    )
    bg = corners.mean(axis=0)
    diff = np.sqrt(np.sum((arr[:, :, :3].astype(np.float32) - bg) ** 2, axis=2))
    alpha = np.clip((diff - DARK_TOLERANCE) * (255.0 / DARK_SOFTNESS), 0, 255)
    out = arr.copy()
    out[:, :, 3] = soften_alpha(alpha, DARK_SOFTNESS)
    return out


def is_mostly_white(arr: np.ndarray) -> bool:
    rgb = arr[:, :, :3]
    whiteish = np.all(rgb >= WHITE_THRESHOLD - 5, axis=2)
    return whiteish.mean() > 0.35


def process_file(path: Path) -> None:
    im = Image.open(path).convert("RGBA")
    arr = np.array(im)
    if is_mostly_white(arr):
        arr = remove_white_background(arr)
    else:
        arr = remove_uniform_background(arr)
    Image.fromarray(arr).save(path, "PNG", optimize=True)
    print(f"OK {path.name}")


def main() -> None:
    for path in sorted(IMAGES_DIR.glob("*.png")):
        if path.name in SKIP:
            continue
        if not path.name.startswith(ONLY_PREFIXES):
            continue
        process_file(path)


if __name__ == "__main__":
    main()
