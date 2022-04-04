document.addEventListener("DOMContentLoaded", function () {
  const addSheepButton = document.getElementById("sheepButton");

  addSheepButton.addEventListener("click", function () {
    new Sheep({
      sheepPenEl: document.querySelector("#sheepPen"),
    });
  });
});
