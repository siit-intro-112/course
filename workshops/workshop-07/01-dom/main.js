console.log('main.js loaded');

// stores the user input data
let nr1;

// reference for the DOM element 
// used by the user to provide input data in the UI
const nr1InputElem = document.querySelector(`#nr-1`);

function readData(){
    // use the "value" property to read the text in the textbox
    nr1 = Number(nr1InputElem.value);
    console.log(`New input data is: ${nr1}`);
}
