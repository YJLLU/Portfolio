document.getElementById("year").textContent = new Date().getFullYear();

const workList = document.getElementById("work-list");

function thumbMarkup(project) {
  if (project.coverVideo) {
    return (
      '<div class="work-item-thumb work-item-thumb--video">' +
      '<video src="' +
      project.coverVideo +
      '" autoplay muted loop playsinline preload="auto" aria-label="' +
      project.title +
      '"></video>' +
      "</div>"
    );
  }

  const slides =
    project.coverSlides && project.coverSlides.length
      ? project.coverSlides
      : project.thumb
        ? [project.thumb]
        : [];

  if (slides.length <= 1) {
    const src = slides[0] || "";
    return (
      '<div class="work-item-thumb">' +
      '<img src="' +
      src +
      '" alt="' +
      project.title +
      '" />' +
      "</div>"
    );
  }

  return (
    '<div class="work-item-thumb work-item-thumb--slideshow" data-cover-interval="' +
    (project.coverInterval || 2000) +
    '">' +
    '<div class="work-item-slideshow" role="img" aria-label="' +
    project.title +
    ' cover slideshow"></div>' +
    "</div>"
  );
}

function initCoverSlideshow(thumbEl, slides, intervalMs) {
  const inner = thumbEl.querySelector(".work-item-slideshow");
  if (!inner) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const validSlides = slides.filter(Boolean);

  validSlides.forEach(function (src, index) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.className = "work-item-slide";
    img.loading = index === 0 ? "eager" : "lazy";
    img.decoding = "async";
    if (index === 0) img.classList.add("is-active");
    img.addEventListener("error", function () {
      img.remove();
    });
    inner.appendChild(img);
  });

  const imgs = inner.querySelectorAll(".work-item-slide");
  if (imgs.length <= 1) return;

  if (reducedMotion) return;

  let current = 0;
  window.setInterval(function () {
    imgs[current].classList.remove("is-active");
    current = (current + 1) % imgs.length;
    imgs[current].classList.add("is-active");
  }, intervalMs);
}

function methodChips(project) {
  if (!project.methods || !project.methods.length) return "";
  return (
    '<ul class="work-methods" aria-label="Methods used for ' +
    project.title +
    '">' +
    project.methods
      .slice(0, 4)
      .map(function (method) {
        return "<li>" + method + "</li>";
      })
      .join("") +
    "</ul>"
  );
}

if (workList && typeof PROJECTS !== "undefined") {
  const items =
    typeof PROJECT_ORDER !== "undefined" && PROJECT_ORDER.length
      ? PROJECT_ORDER.map(function (id) {
          return PROJECTS[id];
        }).filter(Boolean)
      : Object.values(PROJECTS);

  workList.innerHTML = items
    .map(function (p) {
      return (
        '<a class="work-item" href="project.html?id=' +
        p.id +
        '" data-project-id="' +
        p.id +
        '">' +
        thumbMarkup(p) +
        '<div class="work-item-body">' +
        '<span class="tag">' +
        p.tag +
        "</span>" +
        "<h3>" +
        p.title +
        "</h3>" +
        (p.summary ? "<p>" + p.summary + "</p>" : "") +
        methodChips(p) +
        '<span class="work-item-link">View case study</span>' +
        "</div>" +
        "</a>"
      );
    })
    .join("");

  workList.querySelectorAll(".work-item-thumb:not(.work-item-thumb--slideshow) img").forEach(function (img) {
    img.addEventListener("error", function () {
      const wrap = img.parentElement;
      const title = img.alt || "Project";
      const el = document.createElement("div");
      el.className = "placeholder";
      el.textContent = title;
      wrap.replaceChildren(el);
    });
  });

  items.forEach(function (p) {
    if (!p.coverSlides || p.coverSlides.length <= 1) return;
    const thumbEl = workList.querySelector(
      '[data-project-id="' + p.id + '"] .work-item-thumb--slideshow'
    );
    if (!thumbEl) return;
    initCoverSlideshow(thumbEl, p.coverSlides, p.coverInterval || 2000);
  });
}
