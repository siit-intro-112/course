console.log('main.js loaded!');

let clicks = 0;

const clicksDisplay = document.querySelector('.clicks-display');


function incrementClick(){
    clicks++;
    clicksDisplay.textContent = clicks;

    clicksDisplay.classList.remove('positive-number','negative-number');
    if(clicks > 0){
        clicksDisplay.classList.add('positive-number');
    }
    else {
        if(clicks < 0){
            clicksDisplay.classList.add('negative-number');
        }
    }
}

function decrementClick(){
    clicks--;
    clicksDisplay.textContent = clicks;

    clicksDisplay.classList.remove('positive-number','negative-number');
    if(clicks > 0){
        clicksDisplay.classList.add('positive-number');
    }
    else {
        if(clicks < 0){
            clicksDisplay.classList.add('negative-number');
        }
    }
}

function reset() {
    clicks = 0;
    clicksDisplay.textContent = clicks;

    clicksDisplay.classList.remove('positive-number','negative-number');
}
