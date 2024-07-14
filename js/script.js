window.addEventListener("DOMContentLoaded", () => {
  // MENU
  const elSiteHeader = document.querySelector(".site-header"),
    elMenuButton = elSiteHeader.querySelector(".site-header__menu-button"),
    elMenuButtonClose = elSiteHeader.querySelector(
      ".site-header__close-button"
    );

  if (elMenuButton) {
    elMenuButton.addEventListener("click", () => {
      elSiteHeader.classList.add("site-header--open");
    });
  }

  if (elMenuButtonClose) {
    elMenuButtonClose.addEventListener("click", () => {
      elSiteHeader.classList.remove("site-header--open");
    });
  }
});
