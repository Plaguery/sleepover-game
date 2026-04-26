const next = document.querySelector("#next");

next.addEventListener("mouseover", () => {
  next.src = "assets/ui_next_hover.png";
  console.log(next.src);
});

next.addEventListener("mouseout", () => {
  next.src = "assets/ui_next.png";
});
