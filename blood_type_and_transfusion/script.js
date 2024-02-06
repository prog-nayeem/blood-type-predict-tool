document.addEventListener("DOMContentLoaded", function () {
  const components = document.querySelectorAll(
    ".image-and-ricipient-content-wrapper"
  );
  var h2OutputElements = document.querySelectorAll("#output-content h2");
  var recipientTypes = document.querySelectorAll(".recipient-type-content");
  var transfusionContents = document.querySelectorAll(".transfusion-content");
  var oToOpipe = document.querySelector(".o-to-o-pipe");
  var oToAgreyPipe = document
    .querySelector(".o-to-a-pipe")
    .querySelector(".o-to-a-grey-pipe");
  var oToBpipe = document.querySelector(".o-to-b-pipe");
  var oToBgreyPipe = oToBpipe.querySelector(".o-to-b-grey-pipe");
  var oToAbPipe = document.querySelector(".o-to-ab-pipe");
  var oToAbGreyPipe = oToAbPipe.querySelector(".o-to-ab-grey-pipe");
  var aToAgreyPipe = document
    .querySelector(".a-to-a-pipe")
    .querySelector(".a-to-a-grey-pipe");
  var aToAbPipe = document.querySelector(".a-to-ab-pipe");
  var aToAbGreyPipe = aToAbPipe.querySelector(".a-to-ab-grey-pipe");
  var bToBgreyPipe = document
    .querySelector(".b-to-b-pipe")
    .querySelector(".b-to-b-grey-pipe");
  var bToAbPipe = document.querySelector(".b-to-ab-pipe");
  var bToAbGreyPipe = bToAbPipe.querySelector(".b-to-ab-grey-pipe");
  var abToAbGreyPipe = document
    .querySelector(".ab-to-ab-pipe")
    .querySelector(".ab-to-ab-grey-pipe");
  //   const svg = document.getElementById(`svg-o`);

  // Loop through each component
  components.forEach(function (component) {
    // Attach click event listener
    component.addEventListener("click", function () {
      // Get the ID of the clicked component
      const id = component.id;

      function changeAnimationTranslate() {
        const svg = document.getElementById("svg-o");

        // const waveShape = svg.querySelector("#waveShapeId");

        waveShape.style.transition = "transform 2s ease-in-out"; // Adjust the duration and timing function as needed

        // Set the new transform values
        waveShape.style.transform = "translate(100px, -1930px)";

        // // Modify the keyframe values directly
        // const keyframes = `@keyframes waveAction01 {
        //   0% {
        //     transform: translate(300px, -1800px);
        //   }
        //   50% {
        //     transform: translate(102px, -1810px);
        //   }
        //   100% {
        //     transform: translate(300px, -1800px);
        //   }
        // }`;

        // // Create a new style element and insert the modified keyframes
        // const style = document.createElement("style");
        // style.textContent = keyframes;

        // // Replace the existing animation with the new one
        // // waveShape.parentNode.removeChild(waveShape);
        // document.head.appendChild(style);
      }

      //   function changeTransform() {
      //     // Get the SVG element by its ID
      //     const svg = document.getElementById("svg-o");

      //     const waveShape = svg.querySelector("#waveShapeId");

      //     // Get the path element within the SVG
      //     // const g = svg.querySelector("g");

      //     // g.removeAttribute("transform");
      //     // console.log(g);
      //     waveShape.classList.replace("waveShape", "waveShapeOnClick");

      //     // Get the current transform value of the path element
      //     // let currentTransform = g.getAttribute("transform");
      //     // console.log(currentTransform);

      //     // Modify the translate value as needed
      //     // currentTransform = currentTransform.replace(
      //     //   "translate(-312, 1822)",
      //     //   "translate(-312, 1920)"
      //     // ); // Replace the translate value as needed

      //     // Update the transform attribute of the path element with the new value
      //     // g.setAttribute("transform", "translate(-312, 1920)");
      //     // console.log(g);
      //   }

      // Perform actions based on the clicked component
      switch (id) {
        case "o":
          // changeAnimationTranslate();

          removeOtherSimilierElClass();

          oToBpipe.style.zIndex = "22";
          oToAbPipe.style.zIndex = "22";

          setTimeout(() => {
            oToOpipe
              .querySelector(".o-to-o-grey-pipe")
              .classList.add("cathater1AnimationIn");
            oToAgreyPipe.classList.add("cathater1AnimationIn");
            oToBgreyPipe.classList.add("cathater1AnimationIn");
            oToAbGreyPipe.classList.add("cathater1AnimationIn");
          }, 200);

          transfusionContents[0].classList.add("fade-transfusion-content");

          h2OutputElements[0].classList.add("fade");

          setTimeout(() => {
            for (var i = 0; i < recipientTypes.length; i++) {
              recipientTypes[i].classList.add("fade-recipient-type-content");
            }
          }, 500);

          break;
        case "a":
          removeOtherSimilierElClass();
          aToAbPipe.style.zIndex = "21";
          setTimeout(() => {
            aToAgreyPipe.classList.add("cathater1AnimationIn");
            aToAbGreyPipe.classList.add("cathater1AnimationIn");
          }, 200);
          transfusionContents[1].classList.add("fade-transfusion-content");
          h2OutputElements[1].classList.add("fade");
          setTimeout(() => {
            recipientTypes[1].classList.add("fade-recipient-type-content");
            recipientTypes[3].classList.add("fade-recipient-type-content");
          }, 500);

          break;
        case "b":
          removeOtherSimilierElClass();

          bToAbPipe.style.zIndex = "22";
          setTimeout(() => {
            bToBgreyPipe.classList.add("cathater1AnimationIn");
            bToAbGreyPipe.classList.add("cathater1AnimationIn");
          }, 200);
          transfusionContents[2].classList.add("fade-transfusion-content");
          h2OutputElements[2].classList.add("fade");
          setTimeout(() => {
            recipientTypes[2].classList.add("fade-recipient-type-content");
            recipientTypes[3].classList.add("fade-recipient-type-content");
          }, 500);

          break;
        case "ab":
          removeOtherSimilierElClass();
          setTimeout(() => {
            abToAbGreyPipe.classList.add("cathater1AnimationIn");
          }, 200);
          transfusionContents[3].classList.add("fade-transfusion-content");
          h2OutputElements[3].classList.add("fade");
          setTimeout(() => {
            recipientTypes[3].classList.add("fade-recipient-type-content");
          }, 500);
          break;
        default:
          // Default actions
          break;
      }
    });
  });

  function removeOtherSimilierElClass() {
    aToAbPipe.style.zIndex = "4";
    oToBpipe.style.zIndex = "4";
    oToAbPipe.style.zIndex = "4";
    bToAbPipe.style.zIndex = "4";

    oToOpipe
      .querySelector(".o-to-o-grey-pipe")
      .classList.remove("cathater1AnimationIn");

    oToAgreyPipe.classList.remove("cathater1AnimationIn");
    oToBgreyPipe.classList.remove("cathater1AnimationIn");
    oToAbGreyPipe.classList.remove("cathater1AnimationIn");
    aToAgreyPipe.classList.remove("cathater1AnimationIn");
    aToAbGreyPipe.classList.remove("cathater1AnimationIn");
    bToBgreyPipe.classList.remove("cathater1AnimationIn");
    bToAbGreyPipe.classList.remove("cathater1AnimationIn");
    abToAbGreyPipe.classList.remove("cathater1AnimationIn");

    transfusionContents.forEach(function (h1) {
      h1.classList.remove("fade-transfusion-content");
    });
    h2OutputElements.forEach(function (h2) {
      h2.classList.remove("fade");
    });
    recipientTypes.forEach(function (div) {
      div.classList.remove("fade-recipient-type-content");
    });
  }
});
