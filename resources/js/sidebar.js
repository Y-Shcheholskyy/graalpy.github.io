//Expand&Collapse sidebar&changing icon onclick

const menuabout = document.querySelector(".menuabout");
menuabout && menuabout.addEventListener("click", function () {
    expandSidebar();
});
function expandSidebar() {
  document.querySelector("article").classList.toggle("short");
  $('#sidebarClose').toggleClass("no-display")
  $('#sidebarOpen').toggleClass("no-display")
}

// Sticky sidebar
var sidebar = document.querySelector('.sidebar-wrap');

if (sidebar) {
  var stickySidebar = new StickySidebar(sidebar, {
    topSpacing: 74,
    bottomSpacing: 40
  });

  sidebar.addEventListener('affix.container-bottom.stickySidebar', function (event) {
    window.dispatchEvent(new Event('resize'));
  });
}