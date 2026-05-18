document.getElementById("year").textContent = new Date().getFullYear();

const workList = document.getElementById("work-list");

if (workList && typeof PROJECTS !== "undefined") {
  const items = Object.values(PROJECTS);

  workList.innerHTML = items
    .map(function (p) {
      return (
        '<a class="work-item" href="project.html?id=' +
        p.id +
        '">' +
        '<div class="work-item-thumb">' +
        '<img src="' +
        p.thumb +
        '" alt="' +
        p.title +
        '" />' +
        "</div>" +
        '<div class="work-item-body">' +
        '<span class="tag">' +
        p.tag +
        "</span>" +
        "<h3>" +
        p.title +
        "</h3>" +
        "<p>" +
        p.summary +
        "</p>" +
        "</div>" +
        "</a>"
      );
    })
    .join("");

  workList.querySelectorAll(".work-item-thumb img").forEach(function (img) {
    img.addEventListener("error", function () {
      const wrap = img.parentElement;
      const title = img.alt || "Project";
      const el = document.createElement("div");
      el.className = "placeholder";
      el.textContent = title;
      wrap.replaceChildren(el);
    });
  });
}
