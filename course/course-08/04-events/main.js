console.log('Events intro');

function rollDice() {
    const rollValue = Math.floor(Math.random() * 6) + 1;

    //  search for an HTML element with the id "display" 
    // and insert the value of the variable "rollValue"
    document.querySelector(`#display`).textContent = rollValue;

    // alert(`You rolled: ${rollValue}`);
}