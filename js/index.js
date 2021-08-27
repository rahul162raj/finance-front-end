let collapseIconClicked = false;

function toggleCollapseIcon() {
  let navListElement = document.getElementById("navCollapse");
  collapseIconClicked = !collapseIconClicked;
  if (collapseIconClicked) {
    navListElement.style.display = "flex";
  } else {
    navListElement.style.display = "none";
  }
}
