document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".button-group button");
  var outputContent = document.querySelectorAll(".content >  div");
  var ballA = document.querySelector(".ballA");
  var ballB = document.querySelector(".ballB");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.id;

      buttons.forEach(function (button) {
        button.classList.remove("selected");
      });

      button.classList.toggle("selected");

      outputContent.forEach((div) => {
        if (div.id === id) {
          removeExistingFed();
          div.classList.add("fade-in");
        } else {
        }
      });

      switch (id) {
        case "groupA":
          ballB.style.top = "124px";
          ballA.style.top = "243px";
          break;
        case "groupB":
          ballB.style.top = "243px";
          ballA.style.top = "124px";
          break;
        case "groupAB":
          ballB.style.top = "245px";
          ballA.style.top = "234px";
          ballB.style.left = "20px";
          ballA.style.left = "65px";
          break;
        case "groupO":
          ballB.style.top = "124px";
          ballA.style.top = "132px";
          ballB.style.left = "20px";
          ballA.style.left = "65px";

          break;
        default:
          break;
      }
    });
  });

  function removeExistingFed() {
    outputContent.forEach((div) => {
      div.classList.remove("fade-in");
    });
  }
});
