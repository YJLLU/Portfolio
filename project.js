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
    " — 将图片放入 images/</div>'\" />" +
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
    '<div><dt>角色</dt><dd>' +
    project.role +
    "</dd></div>" +
    '<div><dt>年份</dt><dd>' +
    project.year +
    "</dd></div>" +
    '<div><dt>客户</dt><dd>' +
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
    '<div class="placeholder">主图：' + project.thumb + "</div>";

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
    "<h2>设计挑战</h2>" +
    "<p>" +
    project.challenge +
    "</p>" +
    "</section>" +
    '<section class="detail-section">' +
    "<h2>设计过程</h2>" +
    "<ul>" +
    approachHtml +
    "</ul>" +
    "</section>" +
    '<section class="detail-section">' +
    "<h2>成果</h2>" +
    "<p>" +
    project.outcome +
    "</p>" +
    "</section>" +
    '<section class="detail-section">' +
    "<h2>设计展示</h2>" +
    '<div class="detail-gallery">' +
    (galleryHtml || imageBlock(project.thumb, project.title, "主视觉")) +
    "</div>" +
    "</section>";
}

function renderNotFound() {
  document.getElementById("detail-main").innerHTML =
    '<div class="not-found">' +
    "<p>未找到该项目。</p>" +
    '<p><a href="index.html">返回首页</a></p>' +
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
