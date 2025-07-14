console.log('Reading data from the DOM!');

// this code will run (just one time!) when main.js is loaded
const nr1Elem = document.querySelector('#nr-1');
const nr2Elem = document.querySelector('#nr-2');

// the function to be executed on user click
// it sould read the user value / values
function countValues(){
    // reading the first user value
    let nr1;
    if(nr1Elem.value.length > 0){
        nr1 = Number(nr1Elem.value);
        console.log(nr1, typeof nr1);
    }
    else {
        alert('No value was provided for the first number');
        return;
    }

    // reading the second user value
    let nr2;
    if(nr2Elem.value.length > 0){
        nr2 = Number(nr2Elem.value);
        console.log(nr2, typeof nr2);
    }
    else {
        alert('No value was provided for the second number');
        return;
    }

    // implementation of the logic...

    // if nr1 is not  smaller than nr2, interchange them!
    if(nr1 > nr2){
        const aux = nr1;
        nr1 = nr2;
        nr2 = aux;
    }

    // now I will have the smaller value in nr1 and the greater value in nr2
    let i = nr1;
    while (i <= nr2) {
        alert(i);
        i++
    }
}