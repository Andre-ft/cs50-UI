document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", (event) => {
    const element = event.target;
    console.log("event target ", element);
    if (element.className === "hide") {
      const parent = element.parentElement;
      const sibling = parent.querySelector("p");
      element.remove();

      parent.style.animationPlayState = "running";

      parent.addEventListener("animationend", () => {
        sibling.remove();
        parent.remove();
      });
    }
  });

  //   document.querySelectorAll("button.hide").forEach((button) => {
  //     button.addEventListener("click", function () {
  //       button.parentElement.remove();
  //     });
  //   });
});
