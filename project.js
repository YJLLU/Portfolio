function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function comparisonBlock(comparison) {
  if (!comparison) return "";

  const problem = comparison.problem;
  const solution = comparison.solution || {};
  const solutionMain = solution.main || null;
  const solutionAside = solution.aside || [];
  const legacySolutions = Array.isArray(comparison.solution)
    ? comparison.solution
    : [];

  const problemHtml =
    '<figure class="comparison-card comparison-problem">' +
    '<div class="comparison-visual">' +
    '<img src="' +
    problem.src +
    '" alt="' +
    (problem.alt || "Traditional colonoscope") +
    '" />' +
    "</div>" +
    (problem.caption ? "<figcaption>" + problem.caption + "</figcaption>" : "") +
    "</figure>";

  function comparisonFigure(item, extraClass) {
    const cls =
      "comparison-card comparison-solution-item" +
      (extraClass ? " " + extraClass : "");
    return (
      '<figure class="' +
      cls +
      '">' +
      '<div class="comparison-visual">' +
      '<img src="' +
      item.src +
      '" alt="' +
      (item.alt || "Solution") +
      '" />' +
      "</div>" +
      (item.caption ? "<figcaption>" + item.caption + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function comparisonVisualImg(item) {
    return (
      '<img src="' +
      item.src +
      '" alt="' +
      (item.alt || "Solution") +
      '" />'
    );
  }

  function comparisonSolutionGroup(main, aside) {
    const asideVisuals = aside
      .map(function (s) {
        return (
          '<figure class="comparison-card comparison-solution-item comparison-solution-side">' +
          '<div class="comparison-visual">' +
          comparisonVisualImg(s) +
          "</div>" +
          "</figure>"
        );
      })
      .join("");

    let asideCaption = "";
    for (let i = 0; i < aside.length; i++) {
      if (aside[i].caption) {
        asideCaption = aside[i].caption;
        break;
      }
    }

    const asideBlock =
      '<div class="comparison-solution-aside">' +
      '<div class="comparison-solution-aside-stack">' +
      asideVisuals +
      "</div>" +
      (asideCaption
        ? '<figcaption class="comparison-solution-aside-caption">' +
          asideCaption +
          "</figcaption>"
        : "") +
      "</div>";

    return (
      '<div class="comparison-solution-group">' +
      '<div class="comparison-solution-align">' +
      '<figure class="comparison-card comparison-solution-item comparison-solution-main">' +
      '<div class="comparison-visual">' +
      comparisonVisualImg(main) +
      "</div>" +
      (main.caption
        ? '<figcaption class="comparison-solution-main-caption">' +
          main.caption +
          "</figcaption>"
        : "") +
      "</figure>" +
      asideBlock +
      "</div>" +
      "</div>"
    );
  }

  let solutionHtml = "";
  if (solutionMain) {
    solutionHtml = comparisonSolutionGroup(solutionMain, solutionAside);
  } else {
    solutionHtml = legacySolutions
      .map(function (s) {
        return comparisonFigure(s);
      })
      .join("");
  }

  return (
    '<section class="detail-section comparison-section">' +
    "<h2>Problem → Solution</h2>" +
    '<div class="comparison-flow">' +
    problemHtml +
    '<div class="comparison-arrow" aria-hidden="true">' +
    '<span class="arrow-line"></span>' +
    '<span class="arrow-head"></span>' +
    "</div>" +
    '<div class="comparison-solutions">' +
    solutionHtml +
    "</div>" +
    "</div>" +
    "</section>"
  );
}

function designSectionsBlock(sections) {
  if (!sections || !sections.length) return "";

  return sections
    .map(function (section) {
      const imagesHtml = (section.images || [])
        .map(function (img) {
          return imageBlock(
            img.src,
            img.alt || img.caption || section.title,
            img.caption
          );
        })
        .join("");

      const imageRowHtml =
        section.imageRow && section.imageRow.length
          ? '<div class="design-gallery-row">' +
            section.imageRow
              .map(function (img) {
                return imageBlock(
                  img.src,
                  img.alt || img.caption || section.title,
                  img.caption
                );
              })
              .join("") +
            "</div>"
          : "";

      const imageRowsHtml =
        section.imageRows && section.imageRows.length
          ? section.imageRows
              .map(function (row, rowIndex) {
                const rowClass =
                  "design-gallery-row design-gallery-row--segments" +
                  (rowIndex === 1 ? " design-gallery-row--distal-media" : "");
                return (
                  '<div class="' +
                  rowClass +
                  '">' +
                  row
                    .map(function (item) {
                      return rowItemBlock(item, section.title);
                    })
                    .join("") +
                  "</div>"
                );
              })
              .join("")
          : "";

      const imageGridHtml =
        section.imageGrid && section.imageGrid.length
          ? '<div class="design-gallery-grid">' +
            section.imageGrid
              .map(function (img) {
                return imageBlock(
                  img.src,
                  img.alt || img.caption || section.title,
                  img.caption
                );
              })
              .join("") +
            "</div>"
          : "";

      const videoHtml = section.video
        ? videoBlock(
            section.video.src,
            section.video.caption || section.title,
            section.video.caption,
            section.video.autoplay
          )
        : "";

      const mediaRowHtml = section.mediaRow
        ? '<div class="design-media-row">' +
          imageBlock(
            section.mediaRow.image.src,
            section.mediaRow.image.alt ||
              section.mediaRow.image.caption ||
              section.title,
            section.mediaRow.image.caption,
            "gallery-item--compact"
          ) +
          videoBlock(
            section.mediaRow.video.src,
            section.mediaRow.video.caption || section.title,
            section.mediaRow.video.caption,
            section.mediaRow.video.autoplay
          ) +
          "</div>"
        : "";

      const galleryHtml =
        imageRowsHtml +
        imagesHtml +
        imageRowHtml +
        imageGridHtml +
        mediaRowHtml +
        videoHtml;

      return (
        '<section class="detail-section design-section" id="' +
        section.id +
        '">' +
        "<h2>" +
        section.title +
        "</h2>" +
        (section.description
          ? '<p class="design-section-desc">' + section.description + "</p>"
          : "") +
        (galleryHtml
          ? '<div class="design-gallery">' + galleryHtml + "</div>"
          : "") +
        "</section>"
      );
    })
    .join("");
}

function rowItemBlock(item, sectionTitle) {
  if (item.column && item.column.length) {
    return (
      '<div class="design-gallery-column">' +
      item.column
        .map(function (colItem) {
          return rowItemBlock(colItem, sectionTitle);
        })
        .join("") +
      "</div>"
    );
  }
  if (item.video) {
    return videoBlock(
      item.src,
      item.caption || sectionTitle,
      item.caption,
      item.autoplay,
      "gallery-item--segment-video"
    );
  }
  return imageBlock(
    item.src,
    item.alt || item.caption || sectionTitle,
    item.caption,
    item.compact ? "gallery-item--segment-compact" : ""
  );
}

function videoBlock(src, alt, caption, autoplay, extraClass) {
  const cap = caption || alt;
  const videoClass = autoplay
    ? "gallery-item--video gallery-item--autoplay"
    : "gallery-item--video";
  const figureClass = extraClass
    ? "gallery-item " + videoClass + " " + extraClass
    : "gallery-item " + videoClass;
  const videoAttrs = autoplay
    ? ' autoplay muted loop playsinline preload="auto"'
    : ' controls playsinline preload="metadata"';
  return (
    '<figure class="' +
    figureClass +
    '">' +
    '<div class="gallery-item-visual">' +
    '<video src="' +
    src +
    '"' +
    videoAttrs +
    ' aria-label="' +
    alt +
    '"></video>' +
    "</div>" +
    (caption ? "<figcaption>" + caption + "</figcaption>" : "") +
    "</figure>"
  );
}

function imageBlock(src, alt, caption, extraClass) {
  const cap = caption || alt;
  const cls = extraClass ? "gallery-item " + extraClass : "gallery-item";
  return (
    '<figure class="' +
    cls +
    '">' +
    '<div class="gallery-item-visual">' +
    '<img src="' +
    src +
    '" alt="' +
    alt +
    '" onerror="this.outerHTML=\'<div class=placeholder>' +
    cap +
    " — Add image to images/</div>'\" />" +
    "</div>" +
    (caption ? "<figcaption>" + caption + "</figcaption>" : "") +
    "</figure>"
  );
}

function renderProject(project) {
  document.title = project.title + " · Portfolio";

  document.getElementById("detail-tag").textContent = project.tag;
  document.getElementById("detail-title").textContent = project.title;
  const summaryEl = document.getElementById("detail-summary");
  if (project.summary) {
    summaryEl.textContent = project.summary;
    summaryEl.hidden = false;
  } else {
    summaryEl.textContent = "";
    summaryEl.hidden = true;
  }

  document.getElementById("detail-meta").innerHTML =
    '<div><dt>Role</dt><dd>' +
    project.role +
    "</dd></div>" +
    '<div><dt>Year</dt><dd>' +
    project.year +
    "</dd></div>" +
    '<div><dt>Project</dt><dd>' +
    project.client +
    "</dd></div>";

  const galleryHtml = (project.gallery || [])
    .map(function (g) {
      return imageBlock(g.src, g.caption, g.caption);
    })
    .join("");

  const designSectionsHtml = designSectionsBlock(project.designSections);

  const heroFallback =
    '<div class="placeholder">Hero image: ' + project.thumb + "</div>";

  const heroHtml = project.comparison
    ? project.overview
      ? '<section class="detail-hero detail-hero--text-only">' +
        "<p>" +
        project.overview +
        "</p>" +
        "</section>"
      : ""
    : '<section class="detail-hero">' +
      '<div class="detail-hero-visual">' +
      '<img src="' +
      project.thumb +
      '" alt="' +
      project.title +
      '" onerror="this.outerHTML=\'' +
      heroFallback.replace(/'/g, "\\'") +
      '\'" />' +
      "</div>" +
      (project.overview ? "<p>" + project.overview + "</p>" : "") +
      "</section>";

  document.getElementById("detail-main").innerHTML =
    heroHtml +
    comparisonBlock(project.comparison) +
    designSectionsHtml +
    (galleryHtml
      ? '<section class="detail-section">' +
        "<h2>Gallery</h2>" +
        '<div class="detail-gallery">' +
        galleryHtml +
        "</div>" +
        "</section>"
      : "");
}

function renderNotFound() {
  document.getElementById("detail-main").innerHTML =
    '<div class="not-found">' +
    "<p>Project not found.</p>" +
    '<p><a href="index.html">Back to home</a></p>' +
    "</div>";
}

const id = getProjectId();
const project =
  id && typeof PROJECTS !== "undefined" ? PROJECTS[id] : null;

if (project) {
  renderProject(project);
} else {
  renderNotFound();
}
