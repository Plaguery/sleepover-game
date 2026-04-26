import { getCookies, closeUp, showDialogue } from "./util.js";
const cookies = getCookies();

const wire = document.querySelector("#wire");
wire.addEventListener("click", () => {
  if (cookies.scissors) {
    console.log("cut");
    // showDialogue(["hm..."]);
    //link to a door ending or smtg
  }
});
