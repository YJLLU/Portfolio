function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function mediaSplitPanel(panel) {
  const heading = panel.heading || "";
  let inner = "";

  if (panel.video) {
    const label = panel.video.caption || panel.video.heading || heading;
    inner =
      '<div class="comparison-split-media comparison-split-media--video">' +
      '<video src="' +
      panel.video.src +
      '" autoplay muted loop playsinline preload="auto" aria-label="' +
      label +
      '"></video>' +
      "</div>";
  } else if (panel.image) {
    inner =
      '<div class="comparison-split-media">' +
      '<figure class="comparison-card comparison-solution-item comparison-solution-main">' +
      '<div class="comparison-visual">' +
      '<img src="' +
      panel.image.src +
      '" alt="' +
      (panel.image.alt || heading) +
      '" />' +
      "</div>" +
      "</figure>" +
      "</div>";
  } else if (panel.buildup && panel.buildup.steps && panel.buildup.steps.length) {
    inner = buildupStepperBlock(panel.buildup);
  }

  return (
    '<div class="comparison-split-panel">' +
    '<h2 class="comparison-split-title">' +
    heading +
    "</h2>" +
    inner +
    "</div>"
  );
}

function buildupStepperBlock(buildup) {
  const steps = buildup.steps || [];
  const interval = buildup.interval || 2000;
  const slidesHtml = steps
    .map(function (s, i) {
      return (
        '<img class="buildup-stepper-slide' +
        (i === 0 ? " is-active" : "") +
        '" src="' +
        s.src +
        '" alt="' +
        (s.alt || "Assembly step " + (i + 1)) +
        '" loading="' +
        (i === 0 ? "eager" : "lazy") +
        '" decoding="async" />'
      );
    })
    .join("");

  return (
    '<div class="comparison-split-media comparison-split-media--buildup">' +
    '<div class="buildup-stepper" data-buildup-stepper data-interval="' +
    interval +
    '">' +
    '<div class="buildup-stepper-slideshow" role="img" aria-label="Design build-up animation">' +
    slidesHtml +
    "</div>" +
    '<p class="buildup-stepper-meta">' +
    '<span class="buildup-stepper-counter">1</span> / ' +
    '<span class="buildup-stepper-total">' +
    steps.length +
    "</span>" +
    "</p>" +
    "</div>" +
    "</div>"
  );
}

function initBuildupSteppers(root) {
  const scope = root || document;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  scope.querySelectorAll("[data-buildup-stepper]").forEach(function (el) {
    if (el.dataset.buildupInit === "1") return;
    el.dataset.buildupInit = "1";

    const slides = el.querySelectorAll(".buildup-stepper-slide");
    if (!slides.length) return;

    const intervalMs =
      parseInt(el.getAttribute("data-interval"), 10) || 2000;
    const counter = el.querySelector(".buildup-stepper-counter");
    let current = 0;
    let timer = null;

    function goTo(index) {
      slides[current].classList.remove("is-active");
      current = index;
      slides[current].classList.add("is-active");
      if (counter) counter.textContent = String(current + 1);
    }

    function tick() {
      goTo((current + 1) % slides.length);
    }

    function start() {
      if (reducedMotion || slides.length <= 1) return;
      stop();
      timer = window.setInterval(tick, intervalMs);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    start();
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
  });
}

function mediaSplitBlock(left, right, extraClass) {
  return (
    '<div class="comparison-render-split' +
    (extraClass ? " " + extraClass : "") +
    '">' +
    mediaSplitPanel(left) +
    mediaSplitPanel(right) +
    "</div>"
  );
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
  const sectionTitle = comparison.title || "Problem → Solution";
  const singleLayout = comparison.layout === "single";
  const splitLayout = comparison.layout === "split";
  const solutionVideo = solution.video || null;

  const problemHtml = problem
    ? '<figure class="comparison-card comparison-problem">' +
      '<div class="comparison-visual">' +
      '<img src="' +
      problem.src +
      '" alt="' +
      (problem.alt || "Traditional colonoscope") +
      '" />' +
      "</div>" +
      (problem.caption ? "<figcaption>" + problem.caption + "</figcaption>" : "") +
      "</figure>"
    : "";

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

  function comparisonRenderVideoSplit(main, video, leftTitle) {
    const rightTitle = video.heading || video.caption || "Design Animation";
    const renderHeading = leftTitle || "Rendered Design";

    return (
      '<div class="comparison-render-split">' +
      '<div class="comparison-split-panel">' +
      '<h2 class="comparison-split-title">' +
      renderHeading +
      "</h2>" +
      '<div class="comparison-split-media">' +
      '<figure class="comparison-card comparison-solution-item comparison-solution-main">' +
      '<div class="comparison-visual">' +
      comparisonVisualImg(main) +
      "</div>" +
      "</figure>" +
      "</div>" +
      "</div>" +
      '<div class="comparison-split-panel">' +
      '<h2 class="comparison-split-title">' +
      rightTitle +
      "</h2>" +
      '<div class="comparison-split-media comparison-split-media--video">' +
      '<video src="' +
      video.src +
      '" autoplay muted loop playsinline preload="auto" aria-label="' +
      rightTitle +
      '"></video>' +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  let solutionHtml = "";
  if (solutionMain && solutionVideo && splitLayout) {
    solutionHtml = comparisonRenderVideoSplit(
      solutionMain,
      solutionVideo,
      sectionTitle
    );
  } else if (solutionMain) {
    solutionHtml = comparisonSolutionGroup(solutionMain, solutionAside);
  } else {
    solutionHtml = legacySolutions
      .map(function (s) {
        return comparisonFigure(s);
      })
      .join("");
  }

  const showSectionHeading = !(splitLayout && solutionMain && solutionVideo);

  return (
    '<section class="detail-section comparison-section">' +
    (showSectionHeading ? "<h2>" + sectionTitle + "</h2>" : "") +
    '<div class="' +
    (splitLayout
      ? "comparison-flow comparison-flow--split"
      : singleLayout
        ? "comparison-flow comparison-flow--single"
        : "comparison-flow") +
    '">' +
    (singleLayout || splitLayout || !problem
      ? ""
      : problemHtml +
        '<div class="comparison-arrow" aria-hidden="true">' +
        '<span class="arrow-line"></span>' +
        '<span class="arrow-head"></span>' +
        "</div>") +
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
          ? '<div class="design-gallery-row' +
            (section.imageRowClass ? " " + section.imageRowClass : "") +
            '">' +
            section.imageRow
              .map(function (img) {
                return rowItemBlock(img, section.title);
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

      const splitHtml =
        section.layout === "split" && section.split
          ? mediaSplitBlock(
              section.split.left,
              section.split.right,
              section.splitClass
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
        splitHtml ||
        imageRowsHtml +
          imagesHtml +
          imageRowHtml +
          imageGridHtml +
          mediaRowHtml +
          videoHtml;

      const showSectionTitle = !(section.layout === "split" && section.split);

      return (
        '<section class="detail-section design-section" id="' +
        section.id +
        '">' +
        (showSectionTitle && section.title
          ? "<h2>" + section.title + "</h2>"
          : "") +
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
    const columnHtml =
      '<div class="design-gallery-column">' +
      item.column
        .map(function (colItem) {
          return rowItemBlock(colItem, sectionTitle);
        })
        .join("") +
      "</div>";
    if (item.heading || item.headingSpacer) {
      const headingHtml = item.headingSpacer
        ? '<h2 class="design-gallery-heading design-gallery-heading--spacer" aria-hidden="true">&#8203;</h2>'
        : '<h2 class="design-gallery-heading">' + item.heading + "</h2>";
      return (
        '<div class="design-gallery-panel">' +
        headingHtml +
        columnHtml +
        "</div>"
      );
    }
    return columnHtml;
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
  var extraClass = "";
  if (item.compact) extraClass = "gallery-item--segment-compact";
  if (item.square) {
    extraClass = extraClass
      ? extraClass + " gallery-item--square-crop"
      : "gallery-item--square-crop";
  }
  const figureHtml = imageBlock(
    item.src,
    item.alt || item.heading || item.caption || sectionTitle,
    item.heading ? null : item.caption,
    extraClass
  );
  if (item.heading || item.headingSpacer) {
    const headingHtml = item.headingSpacer
      ? '<h2 class="design-gallery-heading design-gallery-heading--spacer" aria-hidden="true">&#8203;</h2>'
      : '<h2 class="design-gallery-heading">' + item.heading + "</h2>";
    return (
      '<div class="design-gallery-panel">' +
      headingHtml +
      figureHtml +
      "</div>"
    );
  }
  return figureHtml;
}

function videoBlock(src, alt, caption, autoplay, extraClass) {
  const cap = caption || alt;
  const figureClass = extraClass
    ? "gallery-item gallery-item--video gallery-item--autoplay " + extraClass
    : "gallery-item gallery-item--video gallery-item--autoplay";
  return (
    '<figure class="' +
    figureClass +
    '">' +
    '<div class="gallery-item-visual">' +
    '<video src="' +
    src +
    '" autoplay muted loop playsinline preload="auto" aria-label="' +
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

  const heroHtml =
    project.showHero === false
      ? project.overview
        ? '<section class="detail-hero detail-hero--text-only">' +
          "<p>" +
          project.overview +
          "</p>" +
          "</section>"
        : ""
      : project.comparison
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

  const main = document.getElementById("detail-main");
  main.innerHTML =
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
  initBuildupSteppers(main);
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
