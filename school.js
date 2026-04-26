import { refreshInv, showDialogue, closeUp } from "./util.js";
const bgm = new Audio("music/2_bgm.mp3");
bgm.loop = true;
bgm.volume = 0.15;

document.querySelector("body").addEventListener(
  "click",
  () => {
    bgm.play();
  },
  { once: true },
);

const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");
const lock = document.querySelector("#lock");
const combo = document.querySelector("#comboLock");
const submit = document.querySelector("#submitCombo");

//page load dialogue
showDialogue(
  [
    "You suddenly begin to fall.",
    "The world blurs around you.",
    "When you regain focus, you find yourself in a classroom.",
  ],
  dialog,
  dialogText,
);

lock.addEventListener(
  "click",
  () => {
    showDialogue(
      [
        "You attempt to open the cabinet.",
        "It's locked.",
        "Looks like you need to find a 3 digit code.",
      ],
      dialog,
      dialogText,
    );
  },
  { once: true },
);

lock.addEventListener("click", () => {
  const exitLock = document.querySelector("#exitLock");
  closeUp(comboLock, exitLock);
});

submit.addEventListener("click", () => {
  var code = "";
  var comboBox = combo.children;
  for (var i = 0; i < 4; i++) {
    code += comboBox[i].value;
  }
  if (code == "4622") {
    console.log("got it");
    showDialogue(
      [
        "You twist the dials...",
        "And the lock pops open!",
        "Inside the cabinet, you find a pair of scissors.",
      ],
      dialog,
      dialogText,
    );
    //click detector,,,.. pick up scissors
    document.cookie = "scissors=true";
  } else {
    showDialogue(
      ["You twist the dials...", "And nothing happens."],
      dialog,
      dialogText,
    );
  }
});

refreshInv();
