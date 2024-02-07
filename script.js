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
  var oToOpipe = document.querySelector(".sec-two-o-to-o-pipe");
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
            oToOpipe
              .querySelector(".sec-two-o-to-o-grey-pipe")
              .classList.add("secTwoCathater1AnimationIn");
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

    oToOpipe
      .querySelector(".sec-two-o-to-o-grey-pipe")
      .classList.remove("secTwoCathater1AnimationIn");

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
});

// BLOOD TYPE AND TRANSFUSION SCRIPT END
