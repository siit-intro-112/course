console.log('THE DOM in Action');

// DOM - the Document Object Model
// the representation in the browser memory of the elements

// document.querySelector('css selector')
// searches for a DOM element matching the css selector

// DOM element - textContent property = 
// the text between opening and closing tags

// DOM element - value property (mmostly used in a form input) = 
// the current text of the HTML "value" attribute

console.log('JS file loaded...');

// this code runs when the JS file is loaded!!
// this is a DOM element 
const nr1DOMElem = document.querySelector('#nr-1');
const nr2DOMElem = document.querySelector('#nr-2');
const displayDOMElem = document.querySelector('#display');


// function declaration - will only run upon the call: sumValues()
function sumValues(){
    let nr1 = nr1DOMElem.value;
    nr1 = Number(nr1);

    let nr2 = nr2DOMElem.value;
    nr2 = Number(nr2);

    // output
    displayDOMElem.textContent = 'Sum is: ' + (nr1 + nr2);
}


// function declaration - will only run upon the call: subtractValues()
function subtractValues(){
    let nr1 = nr1DOMElem.value;
    nr1 = Number(nr1);

    let nr2 = nr2DOMElem.value;
    nr2 = Number(nr2);

    // output
    displayDOMElem.textContent = 'Subtraction is: ' + (nr1 - nr2);
}


// function declaration - will only run upon the call: multiplyValues()
function multiplyValues(){
    let nr1 = nr1DOMElem.value;
    nr1 = Number(nr1);

    let nr2 = nr2DOMElem.value;
    nr2 = Number(nr2);

    // output
    displayDOMElem.textContent = 'Product is: ' + nr1 * nr2;
}


// function declaration - will only run upon the call: divideValues()
function divideValues(){
    let nr1 = nr1DOMElem.value;
    nr1 = Number(nr1);

    let nr2 = nr2DOMElem.value;
    nr2 = Number(nr2);

    // output
    if(nr2 === 0){
        displayDOMElem.textContent = 'Division by 0 is not allowed!';
        return; // stop further exectution of the function!
    }

    displayDOMElem.textContent = 'Division is: ' + nr1 / nr2;
}


console.log('JS file finished loading...');