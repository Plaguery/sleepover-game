import { getCookies } from "./util.js";
const cookies = getCookies();
const door = document.querySelector("#door");
door.addEventListener("click", () => {
  if (cookies.key) {
    //unlock the door idk man
    //happy ending
  } else {
    //sad ending boo hoo
  }
});
