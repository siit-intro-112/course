
// business layer comunicating data layer:  store / retrieve clicks
let counter = localStorage.getItem("counterValue");
if(counter === null){
    counter = 0;
    localStorage.setItem("counterValue", counter);
}
console.log(counter);

// business layer comunicating presentation layer
const display = document.querySelector('.display');
display.textContent = counter;

// presentation layer comunicating business layer
function increaseClick(){
    // business layer increase counter
    counter++;

    // business layer comunicating data layer:
    localStorage.setItem("counterValue", counter);
    
    // display in the presentation layer
    display.textContent = counter;
}