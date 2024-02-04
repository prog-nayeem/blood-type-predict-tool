document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button-group button");

  const bloodTypeValues = {
    "O+": {
      "caucasian-val": 37,
      "african-american-val": 47,
      "asin-val": 39,
      "latino-american-val": 53,
    },
    "O-": {
      "caucasian-val": 8,
      "african-american-val": 4,
      "asin-val": 1,
      "latino-american-val": 4,
    },
    "A+": {
      "caucasian-val": 33,
      "african-american-val": 24,
      "asin-val": 27,
      "latino-american-val": 29,
    },
    "A-": {
      "caucasian-val": 7,
      "african-american-val": 2,
      "asin-val": 0.5,
      "latino-american-val": 2,
    },
    "B+": {
      "caucasian-val": 9,
      "african-american-val": 18,
      "asin-val": 25,
      "latino-american-val": 9,
    },
    "B-": {
      "caucasian-val": 2,
      "african-american-val": 1,
      "asin-val": 0.4,
      "latino-american-val": 1,
    },
    "AB+": {
      "caucasian-val": 3,
      "african-american-val": 4,
      "asin-val": 7,
      "latino-american-val": 2,
    },

    "AB-": {
      "caucasian-val": 1,
      "african-american-val": 0.3,
      "asin-val": 0.1,
      "latino-american-val": 0.2,
    },
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const bloodType = button.textContent;

      buttons.forEach(function (button) {
        button.classList.remove("selected");
      });

      button.classList.toggle("selected");

      if (bloodTypeValues.hasOwnProperty(bloodType)) {
        const values = bloodTypeValues[bloodType];
        for (const elementId in values) {
          if (values.hasOwnProperty(elementId)) {
            updateValue(elementId, values[elementId]);
          }
        }
      } else {
        console.log("Invalid blood type");
      }
    });
  });

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
