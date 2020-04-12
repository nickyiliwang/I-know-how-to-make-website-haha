const addingStuff = document.querySelector(".adding-stuff");
const stuffContainer = document.querySelector(".container");
document.addEventListener("DOMContentLoaded", function () {
  addingStuff.addEventListener("click", () => {
    const stuffToAdd = document.createElement("h2");
    stuffToAdd.textContent = "Hello World";

    stuffContainer.appendChild(stuffToAdd);
  });
});
