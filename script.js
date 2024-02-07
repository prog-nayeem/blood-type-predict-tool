document.addEventListener("DOMContentLoaded", function () {
  //  HOW BLOOD TYPE IS DETERMINED SCRIPT START
  var secOneButtons = document.querySelectorAll(".sec-one-button-group button");
  var secOneOutputContent = document.querySelectorAll(
    ".sec-one-content >  div"
  );
  var secOneBallA = document.querySelector(".sec-one-ballA");
  var secOneBallB = document.querySelector(".sec-one-ballB");

  secOneButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.id;

      secOneButtons.forEach(function (button) {
        button.classList.remove("sec-one-button-selected");
      });

      button.classList.toggle("sec-one-button-selected");

      secOneOutputContent.forEach((div) => {
        if (div.id === id) {
          removeExistingFed();
          div.classList.add("sec-one-fade-in");
        } else {
        }
      });

      switch (id) {
        case "secOneGroupA":
          console.log("hello");
          secOneBallB.style.top = "124px";
          secOneBallA.style.top = "243px";
          break;
        case "secOneGroupB":
          secOneBallB.style.top = "243px";
          secOneBallA.style.top = "124px";
          break;
        case "secOneGroupAB":
          secOneBallB.style.top = "245px";
          secOneBallA.style.top = "234px";
          secOneBallB.style.left = "20px";
          secOneBallA.style.left = "65px";
          break;
        case "secOneGroupO":
          secOneBallB.style.top = "124px";
          secOneBallA.style.top = "132px";
          secOneBallB.style.left = "20px";
          secOneBallA.style.left = "65px";

          break;
        default:
          break;
      }
    });
  });

  function removeExistingFed() {
    secOneOutputContent.forEach((div) => {
      div.classList.remove("sec-one-fade-in");
    });
  }
  //  HOW BLOOD TYPE IS DETERMINED SCRIPT END

  // BLOOD TYPE AND TRANSFUSION SCRIPT START

  const components = document.querySelectorAll(
    ".sec-two-image-and-ricipient-content-wrapper"
  );
  var h2OutputElements = document.querySelectorAll(
    "#sec-two-output-content h2"
  );
  var recipientTypes = document.querySelectorAll(
    ".sec-two-recipient-type-content"
  );
  var transfusionContents = document.querySelectorAll(
    ".sec-two-transfusion-content"
  );
  var oToOgreyPipe = document
    .querySelector(".sec-two-o-to-o-pipe")
    .querySelector(".sec-two-o-to-o-grey-pipe");
  var oToAgreyPipe = document
    .querySelector(".sec-two-o-to-a-pipe")
    .querySelector(".sec-two-o-to-a-grey-pipe");
  var oToBpipe = document.querySelector(".sec-two-o-to-b-pipe");
  var oToBgreyPipe = oToBpipe.querySelector(".sec-two-o-to-b-grey-pipe");
  var oToAbPipe = document.querySelector(".sec-two-o-to-ab-pipe");
  var oToAbGreyPipe = oToAbPipe.querySelector(".sec-two-o-to-ab-grey-pipe");
  var aToAgreyPipe = document
    .querySelector(".sec-two-a-to-a-pipe")
    .querySelector(".sec-two-a-to-a-grey-pipe");
  var aToAbPipe = document.querySelector(".sec-two-a-to-ab-pipe");
  var aToAbGreyPipe = aToAbPipe.querySelector(".sec-two-a-to-ab-grey-pipe");
  var bToBgreyPipe = document
    .querySelector(".sec-two-b-to-b-pipe")
    .querySelector(".sec-two-b-to-b-grey-pipe");
  var bToAbPipe = document.querySelector(".sec-two-b-to-ab-pipe");
  var bToAbGreyPipe = bToAbPipe.querySelector(".sec-two-b-to-ab-grey-pipe");
  var abToAbGreyPipe = document
    .querySelector(".sec-two-ab-to-ab-pipe")
    .querySelector(".sec-two-ab-to-ab-grey-pipe");
  var waterWaveTransform = document.querySelectorAll(
    "#sec-two-water-wave-transform"
  );

  components.forEach(function (component) {
    component.addEventListener("click", function () {
      const id = component.id;
      switch (id) {
        case "secTwoO":
          removeOtherSimilierElClass();
          oToBpipe.style.zIndex = "22";
          oToAbPipe.style.zIndex = "22";

          transfusionContents[0].classList.add(
            "sec-two-fade-transfusion-content"
          );
          h2OutputElements[0].classList.add("sec-two-fade");

          setTimeout(() => {
            setWaterWaveTransform({ y1: 1965 });
            oToOgreyPipe.classList.add("secTwoCathater1AnimationIn");
            oToAgreyPipe.classList.add("secTwoCathater1AnimationIn");
            oToBgreyPipe.classList.add("secTwoCathater1AnimationIn");
            oToAbGreyPipe.classList.add("secTwoCathater1AnimationIn");
            for (var i = 0; i < recipientTypes.length; i++) {
              recipientTypes[i].classList.add(
                "sec-two-fade-recipient-type-content"
              );
            }
          }, 500);

          break;
        case "secTwoA":
          removeOtherSimilierElClass();
          aToAbPipe.style.zIndex = "21";

          transfusionContents[1].classList.add(
            "sec-two-fade-transfusion-content"
          );
          h2OutputElements[1].classList.add("sec-two-fade");
          setTimeout(() => {
            setWaterWaveTransform({ y2: 1965 });
            aToAgreyPipe.classList.add("secTwoCathater1AnimationIn");
            aToAbGreyPipe.classList.add("secTwoCathater1AnimationIn");
            recipientTypes[1].classList.add(
              "sec-two-fade-recipient-type-content"
            );
            recipientTypes[3].classList.add(
              "sec-two-fade-recipient-type-content"
            );
          }, 500);

          break;
        case "secTwoB":
          removeOtherSimilierElClass();

          bToAbPipe.style.zIndex = "22";

          transfusionContents[2].classList.add(
            "sec-two-fade-transfusion-content"
          );
          h2OutputElements[2].classList.add("sec-two-fade");

          setTimeout(() => {
            setWaterWaveTransform({ y3: 1965 });
            bToBgreyPipe.classList.add("secTwoCathater1AnimationIn");
            bToAbGreyPipe.classList.add("secTwoCathater1AnimationIn");
            recipientTypes[2].classList.add(
              "sec-two-fade-recipient-type-content"
            );
            recipientTypes[3].classList.add(
              "sec-two-fade-recipient-type-content"
            );
          }, 500);

          break;
        case "secTwoAb":
          removeOtherSimilierElClass();

          transfusionContents[3].classList.add(
            "sec-two-fade-transfusion-content"
          );
          h2OutputElements[3].classList.add("sec-two-fade");
          setTimeout(() => {
            setWaterWaveTransform({ y4: 1965 });
            abToAbGreyPipe.classList.add("secTwoCathater1AnimationIn");
            recipientTypes[3].classList.add(
              "sec-two-fade-recipient-type-content"
            );
          }, 500);
          break;
        default:
          // Default actions
          break;
      }
    });
  });

  function setWaterWaveTransform({
    x = -312,
    y1 = 1822,
    y2 = 1822,
    y3 = 1822,
    y4 = 1822,
  }) {
    waterWaveTransform[0].style.transitionDuration = "1s";
    waterWaveTransform[0].setAttribute("transform", `translate(${x} ${y1})`);

    waterWaveTransform[1].style.transitionDuration = "1s";
    waterWaveTransform[1].setAttribute("transform", `translate(${x} ${y2})`);

    waterWaveTransform[2].style.transitionDuration = "1s";
    waterWaveTransform[2].setAttribute("transform", `translate(${x} ${y3})`);

    waterWaveTransform[3].style.transitionDuration = "1s";
    waterWaveTransform[3].setAttribute("transform", `translate(${x} ${y4})`);
  }

  function removeOtherSimilierElClass() {
    setWaterWaveTransform({ x: -312, y1: 1822, y2: 1822, y3: 1822, y4: 1822 });
    waterWaveTransform[0].style.transitionDuration = "0.5s";
    waterWaveTransform[1].style.transitionDuration = "0.5s";
    waterWaveTransform[2].style.transitionDuration = "0.5s";

    waterWaveTransform[3].style.transitionDuration = "0.5s";

    aToAbPipe.style.zIndex = "4";
    oToBpipe.style.zIndex = "4";
    oToAbPipe.style.zIndex = "4";
    bToAbPipe.style.zIndex = "4";

    if (aToAgreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      aToAgreyPipe.classList.add("secTwoCathater1AnimationOut");
    }
    if (oToOgreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      oToOgreyPipe.classList.add("secTwoCathater1AnimationOut");
    }

    if (oToAgreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      oToAgreyPipe.classList.add("secTwoCathater1AnimationOut");
    }

    if (oToBgreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      oToBgreyPipe.classList.add("secTwoCathater1AnimationOut");
    }

    if (oToAbGreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      oToAbGreyPipe.classList.add("secTwoCathater1AnimationOut");
    }

    if (aToAbGreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      aToAbGreyPipe.classList.add("secTwoCathater1AnimationOut");
    }

    if (bToBgreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      bToBgreyPipe.classList.add("secTwoCathater1AnimationOut");
    }

    if (bToAbGreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      bToAbGreyPipe.classList.add("secTwoCathater1AnimationOut");
    }

    if (abToAbGreyPipe.classList.contains("secTwoCathater1AnimationIn")) {
      abToAbGreyPipe.classList.add("secTwoCathater1AnimationOut");
    }

    oToOgreyPipe.classList.remove("secTwoCathater1AnimationIn");
    oToAgreyPipe.classList.remove("secTwoCathater1AnimationIn");
    oToBgreyPipe.classList.remove("secTwoCathater1AnimationIn");
    oToAbGreyPipe.classList.remove("secTwoCathater1AnimationIn");
    aToAgreyPipe.classList.remove("secTwoCathater1AnimationIn");
    aToAbGreyPipe.classList.remove("secTwoCathater1AnimationIn");
    bToBgreyPipe.classList.remove("secTwoCathater1AnimationIn");
    bToAbGreyPipe.classList.remove("secTwoCathater1AnimationIn");
    abToAbGreyPipe.classList.remove("secTwoCathater1AnimationIn");

    transfusionContents.forEach(function (h1) {
      h1.classList.remove("sec-two-fade-transfusion-content");
    });
    h2OutputElements.forEach(function (h2) {
      h2.classList.remove("sec-two-fade");
    });
    recipientTypes.forEach(function (div) {
      div.classList.remove("sec-two-fade-recipient-type-content");
    });
  }

  // BLOOD TYPE AND TRANSFUSION SCRIPT END

  // RARE BLOOD TYPE STYLE START

  const secThreeButtons = document.querySelectorAll(
    ".sec-three-button-group button"
  );
  const waterTransform = document.querySelectorAll(
    "#sec-three-water-transform"
  );

  const bloodTypeData = {
    "O+": {
      "caucasian-val": 37,
      "african-american-val": 47,
      "asin-val": 39,
      "latino-american-val": 53,
      transform: [-300, 1860, 1845, 1855, 1830],
    },
    "O-": {
      "caucasian-val": 8,
      "african-american-val": 4,
      "asin-val": 1,
      "latino-american-val": 4,
      transform: [-300, 1900, 1905, 1913, 1905],
    },
    "A+": {
      "caucasian-val": 33,
      "african-american-val": 24,
      "asin-val": 27,
      "latino-american-val": 29,
      transform: [-300, 1860, 1880, 1873, 1868],
    },
    "A-": {
      "caucasian-val": 7,
      "african-american-val": 2,
      "asin-val": 0.5,
      "latino-american-val": 2,
      transform: [-300, 1902, 1908, 1913, 1908],
    },
    "B+": {
      "caucasian-val": 9,
      "african-american-val": 18,
      "asin-val": 25,
      "latino-american-val": 9,
      transform: [-300, 1897, 1882, 1875, 1897],
    },
    "B-": {
      "caucasian-val": 2,
      "african-american-val": 1,
      "asin-val": 0.4,
      "latino-american-val": 1,
      transform: [-300, 1906, 1911, 1914, 1911],
    },
    "AB+": {
      "caucasian-val": 3,
      "african-american-val": 4,
      "asin-val": 7,
      "latino-american-val": 2,
      transform: [-300, 1903, 1901, 1896, 1906],
    },
    "AB-": {
      "caucasian-val": 1,
      "african-american-val": 0.3,
      "asin-val": 0.1,
      "latino-american-val": 0.2,
      transform: [-300, 1910, 1913, 1915, 1914],
    },
  };

  function secThreeSetDefaultSelections() {
    var defaultButton = secThreeButtons[0];
    if (defaultButton) {
      defaultButton.click();
    }
  }

  secThreeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const bloodType = button.textContent;

      secThreeButtons.forEach(function (button) {
        button.classList.remove("sec-three-selected");
      });

      button.classList.toggle("sec-three-selected");

      if (bloodTypeData.hasOwnProperty(bloodType)) {
        const values = bloodTypeData[bloodType];
        for (const elementId in values) {
          if (values.hasOwnProperty(elementId) && elementId !== "transform") {
            updateValue(elementId, values[elementId]);
          }
        }
        setWaterTransform(values.transform);
      } else {
        console.log("Invalid blood type");
      }
    });
  });
  setTimeout(() => {
    secThreeSetDefaultSelections();
  }, 200);

  function setWaterTransform(transform) {
    waterTransform.forEach((element, index) => {
      element.setAttribute(
        "transform",
        `translate(${transform[0]} ${transform[index + 1]})`
      );
    });
  }

  function updateValue(elementId, newValue) {
    var currentPercentage = parseInt(
      document.getElementById(elementId).textContent,
      10
    );
    var newPercentage = newValue;

    animateNumber(elementId, currentPercentage, newPercentage);
  }

  function animateNumber(elementId, start, end) {
    var duration = 1000; // Animation duration in milliseconds
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;

      var progress = timestamp - startTime;
      var percentage = Math.min(progress / duration, 1);

      var animatedValue;
      if (start + (end - start) * percentage <= 1) {
        animatedValue = start + (end - start) * percentage;
      } else {
        animatedValue = Math.round(start + (end - start) * percentage);
      }

      document.getElementById(elementId).textContent =
        animatedValue.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 1,
        }) + "%";

      if (percentage < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // RARE BLOOD TYPE STYLE END

  // MY BLOOD TYPE DETERMINED SCRIPT START

  var secFourButtons1 = document.querySelectorAll(
    ".sec-four-button-group-1 .sec-four-button"
  );
  var secFourButtons2 = document.querySelectorAll(
    ".sec-four-button-group-2 .sec-four-button"
  );
  var outputText = document.querySelector(".child-content");
  var parentOneImageMaskVal = document.getElementById("parent1ImageMaskVal");
  var parentTwoImageMaskVal = document.getElementById("parent2ImageMaskVal");

  var selections = {
    side1: "",
    side2: "",
  };

  function setDefaultSelections() {
    if (secFourButtons1) {
      secFourButtons1[1].click();
    }
    if (secFourButtons2) {
      secFourButtons2[2].click();
    }
  }

  secFourButtons1.forEach(function (button) {
    button.addEventListener("click", function (event) {
      var buttonText = event.target.textContent;

      handleButtonClick(buttonText, button, 1);
      parentOneImageMaskVal.textContent = buttonText;
      updateOutputText();
    });
  });

  secFourButtons2.forEach(function (button) {
    button.addEventListener("click", function (event) {
      var buttonText = event.target.textContent;

      handleButtonClick(buttonText, button, 2);
      parentTwoImageMaskVal.textContent = buttonText;

      updateOutputText();
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
      secFourButtons1.forEach(function (button) {
        button.classList.remove("sec-four-selected");
      });

      selections.side1 = buttonText;
    } else if (groupNumber === 2) {
      selections.side2 = buttonText;
      secFourButtons2.forEach(function (button) {
        button.classList.remove("sec-four-selected");
      });
    }

    clickedButton.classList.toggle("sec-four-selected");
  }

  // MY BLOOD TYPE DETERMINED SCRIPT END
});
