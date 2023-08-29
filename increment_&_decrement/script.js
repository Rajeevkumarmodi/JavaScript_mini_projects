const incBtn = document.querySelector(".incBtn");
const decBtn = document.querySelector(".decBtn");
const resetBtn = document.querySelector(".resetBtn");
const value = document.querySelector(".value");

let num = 0;

incBtn.addEventListener("click", () => {
  num++;
  value.innerText = num;
});
decBtn.addEventListener("click", () => {
  num--;
  value.innerText = num;
});
resetBtn.addEventListener("click", () => {
  num = 0;
  value.innerText = num;
});
