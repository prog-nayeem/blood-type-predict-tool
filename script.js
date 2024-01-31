document.addEventListener("DOMContentLoaded", function () {
  var buttonGroupOne = document.querySelectorAll(".button-group-1");
  var buttonGroupTwo = document.querySelectorAll(".button-group-2");
  var outputText = document.querySelector(".child-content");

  var selections = {
    side1: "",
    side2: "",
  };

  function setDefaultSelections() {
    var defaultButtonGroupOne = buttonGroupOne[0].querySelector(
      ".button:nth-child(2)"
    );
    var defaultButtonGroupTwo = buttonGroupTwo[0].querySelector(
      ".button:nth-child(3)"
    );

    if (defaultButtonGroupOne) {
      defaultButtonGroupOne.click();
    }

    if (defaultButtonGroupTwo) {
      defaultButtonGroupTwo.click();
    }
  }

  buttonGroupOne.forEach(function (group) {
    var buttons = group.querySelectorAll(".button");

    buttons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        var buttonText = event.target.textContent;

        handleButtonClick(buttonText, button, 1);
        updateOutputText();
      });
    });
  });

  buttonGroupTwo.forEach(function (group) {
    var buttons = group.querySelectorAll(".button");

    buttons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        var buttonText = event.target.textContent;

        handleButtonClick(buttonText, button, 2);
        updateOutputText();
      });
    });
  });

  setDefaultSelections();

  function updateOutputText() {
    if (selections.side1 && selections.side2) {
      var newOutput = combineSelections(selections);
      outputText.innerHTML = "<p>" + newOutput + "</p>";
    }
  }

  function combineSelections(selections) {
    var side1 = selections.side1;
    var side2 = selections.side2;

    if (side1 === "O" && side2 === "O") {
      return "O";
    } else if (
      (side1 === "O" && side2 === "A") ||
      (side1 === "A" && side2 === "O")
    ) {
      return "O or A";
    } else if (
      (side1 === "O" && side2 === "B") ||
      (side1 === "B" && side2 === "O")
    ) {
      return "O or B";
    } else if (
      (side1 === "O" && side2 === "AB") ||
      (side1 === "AB" && side2 == "O")
    ) {
      return "A or B";
    } else if (side1 === "A" && side2 === "A") {
      return "O or A";
    } else if (
      (side1 === "A" && side2 === "B") ||
      (side1 === "B" && side2 == "A")
    ) {
      return "O, A, B or AB";
    } else if (
      (side1 === "A" && side2 === "AB") ||
      (side1 === "AB" && side2 == "A")
    ) {
      return "A, B or AB";
    } else if (side1 === "B" && side2 === "B") {
      return "O or B";
    } else if (
      (side1 === "B" && side2 === "AB") ||
      (side1 === "AB" && side2 == "B")
    ) {
      return "A, B or AB";
    } else if (side1 === "AB" && side2 === "AB") {
      return "A, B or AB";
    } else {
      return "Other combination";
    }
  }

  function handleButtonClick(buttonText, clickedButton, groupNumber) {
    if (groupNumber === 1) {
      buttonGroupOne.forEach(function (group) {
        group.querySelectorAll(".button").forEach(function (button) {
          button.classList.remove("selected");
        });
      });

      selections.side1 = buttonText;
    } else if (groupNumber === 2) {
      selections.side2 = buttonText;
      buttonGroupTwo.forEach(function (group) {
        group.querySelectorAll(".button").forEach(function (button) {
          button.classList.remove("selected");
        });
      });
    }

    clickedButton.classList.toggle("selected");
  }
});
