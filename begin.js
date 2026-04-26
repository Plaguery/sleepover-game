import { refreshInv, showDialogue, closeUp } from "./util.js";

const bgm = new Audio("music/1_bgm.mp3");
bgm.loop = true;
bgm.volume = 0.03;

document.querySelector("body").addEventListener(
  "click",
  () => {
    bgm.play();
  },
  { once: true },
);
const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");
refreshInv();
showDialogue(
  [
    "You wake up in a strange place.",
    "Everything feels familiar, yet you're certain you've never been here before.",
    "You decide to look around.",
  ],
  dialog,
  dialogText,
);

var balloonNum = 4;
const balloons = document.querySelector("#balloons");
const balloonImg = balloons.firstChild;
balloons.addEventListener("click", function popBalloon() {
  switch (balloonNum) {
    case 4:
      balloonImg.setAttribute("src", "assets/1_balloons2.png");
      break;
    case 3:
      balloonImg.setAttribute("src", "assets/1_balloons3.png");
      break;
    case 2:
      balloonImg.setAttribute("src", "assets/1_balloons4.png");
      break;
    case 1:
      balloonImg.style.display = "none";
      balloons.removeEventListener("click", popBalloon);
      break;
  }
  balloonNum -= 1;
});

const swings = document.querySelector("#swing");
swings.addEventListener("click", () => {
  showDialogue(
    ["You sit and swing for a while.", "That was fun."],
    dialog,
    dialogText,
  );
});

const basket = document.querySelector("#basket");
basket.addEventListener("click", () => {
  const basketScene = document.querySelector("#basketCloseUp");
  const exitBasket = document.querySelector("#exitBasket");
  closeUp(basketScene, exitBasket);
  showDialogue(["Ooh, an apple!"], dialog, dialogText);
});

const horse = document.querySelector("#horse");
horse.addEventListener("click", function clickHorse() {
  var index = 0;
  const horseDialogue = ["You sit on the horse.", "Neigh."];
  showDialogue(horseDialogue, dialog, dialogText);
});

const appleButton = document.querySelector("#appleCloseUp");
const apple = appleButton.firstChild;
var bites = 3;
appleButton.addEventListener("click", function bite() {
  const audio = new Audio("music/apple.mp3");
  audio.play();
  switch (bites) {
    case 3:
      apple.setAttribute("src", "assets/1_apple2.png");
      break;
    case 2:
      apple.setAttribute("src", "assets/1_apple3.png");
      break;
    case 1:
      apple.setAttribute("src", "assets/1_apple4.png");
      break;
    case 0:
      apple.setAttribute("src", "assets/1_apple5.png");
      showDialogue(["Item collected!"], dialog, dialogText);
      document.cookie = "key=true";
      appleButton.removeEventListener("click", bite);
      appleButton.style.pointerEvents = "none";
      break;
  }
  bites -= 1;
});
