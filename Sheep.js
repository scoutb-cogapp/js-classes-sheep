class Sheep {
  constructor(options) {
    console.log("bah");
    this.sheepPenEl = options.sheepPenEl;
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
    this.sheepPenEl.appendChild(sheepEl);
  }
}
