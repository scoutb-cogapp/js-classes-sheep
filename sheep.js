const addSheepButton = document.getElementById('sheepButton');

let sheepNumber = 0; 
let sheepFlock = [];

function initiateSheep() {
    const sheep = new Sheep();
}

class Sheep {
    constructor() {
        console.log('bah');
        this.growHerd();
        this.addSheepToFlock();
        this.addSheepToPage();
    }

    // increase sheep count
    growHerd() {
        sheepNumber += 1;
    }
    
    // create and return id for each individual sheep
    createID() {
        return `00${sheepNumber}`;
    }

    // add new sheep instance to an array holding all sheep
    addSheepToFlock() {
        let id = this.createID();
        sheepFlock.push(id)
    }

    // add id to sheep element
    addID(sheep) {
        sheep.setAttribute('id', `${this.createID()}`)
    }

    addSheepToPage() {
        const sheep = document.createElement('div');
        this.addID(sheep)
        sheep.innerHTML = `Sheep number ${sheepNumber} (ID: ${this.createID()})`;
        document.getElementById('sheepPen').appendChild(sheep);
    }
    
}