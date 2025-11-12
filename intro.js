window.addEventListener("load", () => {
  const intro = document.querySelector(".intro");
  const frontCover = document.querySelector(".cover.front");

  setTimeout(() => {
    frontCover.style.animation = "openBook 1s ease-out forwards";
  }, 400);

  setTimeout(() => {
    intro.classList.add("fadeOut");
  }, 2000);

  setTimeout(() => {
    intro.style.display = "none";
  }, 2800);
});
