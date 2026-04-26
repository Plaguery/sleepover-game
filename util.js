export function getCookies() {
  return document.cookie.split("; ").reduce((prev, current) => {
    const [name, ...value] = current.split("=");
    prev[name] = decodeURIComponent(value.join("="));
    return prev;
  }, {});
}
export function refreshInv() {
  const inv = [
    { name: "key", src: "assets/ico_key.png" },
    { name: "scissors", src: "assets/ico_scissors.png" },
  ];

  const inventory = document.querySelector("#inventory");
  console.log(inventory);
  const cookies = getCookies();

  for (const i of inv) {
    if (cookies[i.name]) {
      const item = document.createElement("div");
      item.classList.add("invItem");
      inventory.appendChild(item);
      const icon = document.createElement("img");
      icon.setAttribute("src", i.src);
      item.appendChild(icon);
    }
  }
}

export function showDialogue(dialogTextList, dialog, dialogText) {
  var dialogIndex = 1;
  dialogText.innerHTML = dialogTextList[0];
  dialog.showModal();
  dialog.addEventListener("click", function advanceDialog() {
    if (dialogIndex >= dialogTextList.length) {
      dialog.close();
      console.log("Index:" + dialogIndex);
      dialog.removeEventListener("click", advanceDialog);
    }
    dialogText.innerHTML = dialogTextList[dialogIndex];
    dialogIndex++;
  });
}

export function closeUp(scene, backButton) {
  scene.style.display = "block";
  backButton.addEventListener("click", () => {
    scene.style.display = "none";
  });
}
