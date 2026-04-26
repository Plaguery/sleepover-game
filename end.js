import { showDialogue, getCookies, refreshInv, closeUp } from "./util.js";
refreshInv();
const cookies = getCookies();
const door = document.querySelector("#door");
const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");
const bgm = new Audio("music/wind.mp3");
bgm.loop = true;
bgm.volume = 0.4;
bgm.play();
showDialogue(
  [
    "That wire seemed important, but you ignore it and move on nonetheless.",
    "You come to a door.",
  ],
  dialog,
  dialogText,
);
door.addEventListener("click", () => {
  closeUp(document.querySelector("#doorUp"), document.querySelector("#bye"));
  if (cookies.key) {
    showDialogue(
      [
        "You step up to the door, only to realize it's locked.",
        "Hm...",
        "Good thing I found that key earlier.",
        "You unlock the door, and step forward.",
        "YOU ESCAPED: GOOD ENDING",
      ],
      dialog,
      dialogText,
    );
    document.querySelector("#doorUp").href = "index.html";
  } else {
    const eerie = new Audio("music/eerie.mp3");
    eerie.play();
    showDialogue(
      [
        "You step up to the door, only to realize it's locked.",
        "You stare in dismay.",
        "You know there has to be a key somewhere, if you look hard enough.",
        "Suddenly, your phone starts ringing.",
      ],
      dialog,
      dialogText,
    );

    document.querySelector("#doorUp").href = "endless.html";

    //show phone pop up etc etcen
  }
});
