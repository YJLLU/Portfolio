function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function imageBlock(src, alt, caption) {
  const cap = caption || alt;
  return (
    '<figure class="gallery-item">' +
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
  document.getElementById("detail-summary").textContent = project.summary;

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

  const approachHtml = (project.approach || [])
    .map(function (item) {
      return "<li>" + item + "</li>";
    })
    .join("");

  const heroFallback =
    '<div class="placeholder">Hero image: ' + project.thumb + "</div>";

  document.getElementById("detail-main").innerHTML =
    '<section class="detail-hero">' +
    '<div class="detail-hero-visual">' +
    '<img src="' +
    project.thumb +
    '" alt="' +
    project.title +
    '" onerror="this.outerHTML=\'' +
    heroFallback.replace(/'/g, "\\'") +
    '\'" />' +
    "</div>" +
    "<p>" +
    project.overview +
    "</p>" +
    "</section>" +
    '<section class="detail-section">' +
    "<h2>Challenge</h2>" +
    "<p>" +
    project.challenge +
    "</p>" +
    "</section>" +
    '<section class="detail-section">' +
    "<h2>Process</h2>" +
    "<ul>" +
    approachHtml +
    "</ul>" +
    "</section>" +
    '<section class="detail-section">' +
    "<h2>Outcome</h2>" +
    "<p>" +
    project.outcome +
    "</p>" +
    "</section>" +
    '<section class="detail-section">' +
    "<h2>Gallery</h2>" +
    '<div class="detail-gallery">' +
    (galleryHtml || imageBlock(project.thumb, project.title, "Hero visual")) +
    "</div>" +
    "</section>";
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
