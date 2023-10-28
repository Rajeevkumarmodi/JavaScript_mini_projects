const openBtn = document.querySelector(".open");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".close");
openBtn.addEventListener("click", () => {
  openBtn.classList.add("nonActive");
  container.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  container.style.display = "none";
  openBtn.classList.remove("nonActive");
});
