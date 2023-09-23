const inputArea = document.getElementById("inputArea");
const uploadFile = document.getElementById("uploadFile");
const container = document.querySelector(".container");
const content = document.querySelector(".content");

uploadFile.addEventListener("change", uploadImage);

function uploadImage(e) {
  const url = URL.createObjectURL(uploadFile.files[0]);
  content.style.backgroundImage = `url(${url})`;
  content.innerHTML = "";
}

inputArea.addEventListener("dragover", (event) => {
  event.preventDefault();
});

inputArea.addEventListener("drop", (event) => {
  event.preventDefault();
  uploadFile.files = event.dataTransfer.files;
  uploadImage();
});
