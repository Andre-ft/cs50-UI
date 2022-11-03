function showPage(page) {
  document.querySelectorAll("div.page").forEach((div) => {
    div.style.display = "none";
  });
  document.querySelector(`#${page}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button.page").forEach((button) => {
    button.onclick = function () {
      showPage(button.dataset.page);
    };
  });
});
