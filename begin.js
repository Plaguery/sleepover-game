import { refreshInv } from "./util.js";

var balloonNum = 4;
const balloons = document.querySelector("#balloons");
balloons.addEventListener("click", () => {
  balloons.innerHTML = balloonNum;
  balloonNum -= 1;
});

const basket = document.querySelector("#basket");
basket.addEventListener("click", () => {
  const basketScene = document.querySelector("#basketCloseUp");
  basketScene.style.display = "block";

  const exitBasket = document.querySelector("#exitBasket");
  exitBasket.addEventListener("click", () => {
    basketScene.style.display = "none";
  });
});

const appleButton = document.querySelector("#appleCloseUp");
const apple = appleButton.firstChild;
var bites = 3;
appleButton.addEventListener("click", function bite() {
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
      alert("Item collected!");
      document.cookie = "key=true";
      removeEventListener("click", bite);
      appleButton.style.pointerEvents = "none";
      break;
  }
  bites -= 1;
});

refreshInv();
var dialogIndex = 0;
const dialogTextList = ["*You wake up in a strange place.*", "hello"];
const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");
dialog.showModal();
dialog.addEventListener("click", () => {
  if (dialogIndex >= dialogTextList.length) {
    dialog.close();
  }
  dialogText.innerHTML = dialogTextList[dialogIndex];
  dialogIndex++;
});
