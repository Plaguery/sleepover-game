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

//event listeners - pop up hints on click

const hint1 = document.querySelector("#hint1");
const hint1Up = document.querySelector("#hint1Up");
hint1.addEventListener("click", () => {
  closeUp(hint1Up, document.querySelector("#exitH1"));
});

const hint2 = document.querySelector("#hint2");
const hint2Up = document.querySelector("#hint2Up");
hint2.addEventListener("click", () => {
  closeUp(hint1Up, document.querySelector("#exitH2"));
});

const hint3 = document.querySelector("#hint3");
const hint3Up = document.querySelector("#hint3Up");
hint3.addEventListener("click", () => {
  closeUp(hint3Up, document.querySelector("#exitH3"));
});

const hint4 = document.querySelector("#hint4");
const hint4Up = document.querySelector("#hint4Up");
hint4.addEventListener("click", () => {
  closeUp(hint4Up, document.querySelector("#exitH4"));
});
refreshInv();
