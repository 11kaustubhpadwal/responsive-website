"use strict";

// Section - Navbar

const activateLink1 = () => {
  document.getElementById("link1").classList.add("navbar__link--active");
  document.getElementById("link2").classList.remove("navbar__link--active");
  document.getElementById("link3").classList.remove("navbar__link--active");
};

const activateLink2 = () => {
  document.getElementById("link2").classList.add("navbar__link--active");
  document.getElementById("link1").classList.remove("navbar__link--active");
  document.getElementById("link3").classList.remove("navbar__link--active");
};

const activateLink3 = () => {
  document.getElementById("link3").classList.add("navbar__link--active");
  document.getElementById("link2").classList.remove("navbar__link--active");
  document.getElementById("link1").classList.remove("navbar__link--active");
};

// Section - Contact

const activateCheckbox = () => {
  if (
    !document
      .getElementById("checkbox")
      .classList.contains("contact__form--input-checkbox")
  ) {
    document
      .getElementById("checkbox")
      .classList.add("contact__form--input-checkbox");
  } else {
    document
      .getElementById("checkbox")
      .classList.remove("contact__form--input-checkbox");
  }
};
