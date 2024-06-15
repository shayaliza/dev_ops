document.addEventListener("DOMContentLoaded", () => {
  const popupButton = document.getElementById("popupButton");
  const popupBalloon = document.getElementById("popupBalloon");

  popupButton.addEventListener("click", () => {
    if (popupBalloon.classList.contains("hidden")) {
      popupBalloon.classList.remove("hidden");
      popupBalloon.classList.add("visible");
    } else {
      popupBalloon.classList.remove("visible");
      popupBalloon.classList.add("hidden");
    }
  });
});
