class Sheep {
  constructor() {
    console.log("bah");
    this.id = this.countSheep() + 1;
    this.#addSheepToPage();
  }

  countSheep() {
    return document.querySelectorAll(".sheep").length;
  }

  #addSheepToPage() {
    const sheepEl = document.createElement("div");
    sheepEl.classList.add("sheep");
    sheepEl.id = `sheep-${this.id}`;
    sheepEl.innerHTML = `Sheep number ${100 + this.id} (ID: ${this.id})`;
    document.getElementById("sheepPen").appendChild(sheepEl);
  }
}
