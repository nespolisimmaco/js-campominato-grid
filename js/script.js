// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// L'utente clicca sul bottone per generare la griglia di gioco
const playButton = document.querySelector(".play-button");
console.log(playButton);
playButton.addEventListener("click", function () {
    // Griglia
    const grid = document.querySelector(".grid");
    for (let i = 1; i <= 100; i++) {
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
    newBox.classList.add("grid-item");
    newBox.innerHTML = number;
    // Al click sul box si avvia la funzione handleClick, la quale aggiunge al box la classe che colora il background
    newBox.addEventListener("click", function handleClick() {
        this.classList.add("box-clicked"); 
        console.log("Numero del box cliccato: ", number);
    });
    return newBox;
}