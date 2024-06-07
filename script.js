//sprite
const spriteUm = document.querySelector(".sprite_um");
const spriteDois = document.querySelector(".sprite_dois");

//funçôes

function formaUm() {
  setInterval(() => {
    spriteDois.classList.add("zindex");
  }, 2000);
}

function formaDois() {
  setInterval(() => {
    spriteDois.classList.remove("zindex");
  }, 3000);
}

formaUm();
formaDois();
