// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe

// Scelgo diversi livelli di difficoltà
const difficultySelect = document.getElementById("level");
console.log(difficultySelect);
let difficultyLevel = "easy";
let numberOfBoxes = 100;
// Quando clicco sulla difficolta -----> difficultyLevelChoice
difficultySelect.addEventListener("click", difficultyLevelChoice);
// L'utente clicca sul bottone per generare la griglia di gioco
const playButton = document.querySelector(".play-button");
console.log(playButton);
playButton.addEventListener("click", function () {
    // Griglia
    const grid = document.querySelector(".grid");
    // Svuoto l'elemento grid (nel caso in cui già contenga i box)
    grid.innerHTML = "";
    for (let i = 1; i <= numberOfBoxes; i++) {
        const box = generateGridItem(i);
        grid.append(box);
    }
});

/////////////////////
// FUNCTIONS
/**
 * Description Genero un grid item, ossia un box da inserire nella griglia
 * @param {number} indexNumber
 * @returns {element} newBox
 */
function generateGridItem(indexNumber) {
    const newBox = document.createElement("div");
    const number = indexNumber;
    if (difficultyLevel === "easy") {
        newBox.classList.add("grid-item", "grid-item-ten");
    } else if (difficultyLevel === "medium") {
        newBox.classList.add("grid-item", "grid-item-nine");
    } else if (difficultyLevel === "hard") {
        newBox.classList.add("grid-item", "grid-item-seven");
    }
    newBox.innerHTML = number;
    // Al click sul box si avvia la funzione handleClick, la quale aggiunge al box la classe che colora il background
    newBox.addEventListener("click", function handleClick() {
        this.classList.add("box-clicked"); 
        console.log("Numero del box cliccato: ", number);
    });
    return newBox;
}

/**
 * Description Assegno l'input (select) a difficultyLevel, controllo quale sia la difficoltà scelta, e in base a questa il numero di box cambia
 * @returns {}
 */
function difficultyLevelChoice() {
    difficultyLevel = difficultySelect.value;
    console.log(difficultyLevel);
    if (difficultyLevel === "easy") {
        numberOfBoxes = 100;
    } else if (difficultyLevel === "medium") {
        numberOfBoxes = 81;
    } else if (difficultyLevel === "hard") {
        numberOfBoxes = 49;
    }
}