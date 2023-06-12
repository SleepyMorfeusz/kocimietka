`use strict`;
const dolina = document.querySelector(`.dolina-text-box`);
const josera = document.querySelector(`.josera-text-box`);
const logoDolina = document.querySelector(`.dolina-logo`);
const logoJosera = document.querySelector(`.josera-logo`);
logoDolina.addEventListener("click", function () {
  dolina.classList.remove(`hidden`);
  josera.classList.add(`hidden`);
});

logoJosera.addEventListener("click", function () {
  dolina.classList.add(`hidden`);
  josera.classList.remove(`hidden`);
});
