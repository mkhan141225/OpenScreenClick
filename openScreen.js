const clickButton = document.querySelector("#click-button");
const newImage = document.querySelector("#new-image");
const newText = document.querySelector("#new-text");


newText.style.display = "none";
newImage.style.display = "none";
clickButton.addEventListener("click", () => {
  newText.style.display = "block";
  
  newImage.style.display = "block";
  clickButton.style.display = "none";
});

