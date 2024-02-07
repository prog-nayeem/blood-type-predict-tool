document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button-group button");
  const waterTransform = document.querySelectorAll("#water-transform");

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

  function setDefaultSelections() {
    var defaultButton = buttons[0];
    if (defaultButton) {
      defaultButton.click();
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const bloodType = button.textContent;

      buttons.forEach(function (button) {
        button.classList.remove("selected");
      });

      button.classList.toggle("selected");

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

  setDefaultSelections();

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
});
