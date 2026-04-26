import { getCookies, closeUp, showDialogue, refreshInv } from "./util.js";
const cookies = getCookies();
const next = document.querySelector("#nextCont");
const wire = document.querySelector("#wire");
const snip = new Audio("music/snip.wav");

const bgm = new Audio("music/hum.mp3");
bgm.loop = true;
bgm.volume = 0.4;
bgm.play();

refreshInv();
showDialogue(
  [
    "You find yourself falling once more",
    "You land in an abandoned office building.",
    "The electric hum is unsettling.",
  ],
  dialog,
  dialogText,
);
wire.addEventListener("click", () => {
  if (cookies.scissors) {
    snip.play();
    showDialogue(
      ["SNIP.", "Everything disappears in a flash of white."],
      dialog,
      dialogText,
    );
    wire.style.display = "none";
    document.querySelector("#white").style.display = "block";
    next.setAttribute("href", "escape.html");
  } else {
    showDialogue(
      [
        "You feel like you should cut this wire.",
        "For that, you'll need something sharp.",
        "Don't people usually lock up their sharp objects?",
      ],
      dialog,
      dialogText,
    );
  }
});
