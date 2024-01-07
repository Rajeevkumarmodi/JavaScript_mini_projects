// manu logic

const manuBar = document.querySelector(".manuBar");
const closeManu = document.querySelector(".closeManu");
const mobileManu = document.querySelector("#mobileManu");

manuBar.addEventListener("click", () => {
  mobileManu.classList.remove("manu");
  mobileManu.classList.add("activeManu");
});

closeManu.addEventListener("click", () => {
  mobileManu.classList.add("manu");
  mobileManu.classList.remove("activeManu");
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Add your contact form submission logic here

    alert("Form submitted successfully!"); // Replace this with your actual logic
  });
