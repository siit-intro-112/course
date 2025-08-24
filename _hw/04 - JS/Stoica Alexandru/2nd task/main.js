const firstNr = document.querySelector('#nr-1');
const secondNr = document.querySelector('#nr-2');
const thirdNr = document.querySelector('#nr-3');

function maxNr(){
    let inputValues = [];

    let nr1;
    if (firstNr.value.length > 0) {
         nr1 = Number(firstNr.value);
         inputValues.push(nr1);
    }

    let nr2;
    if (secondNr.value.length > 0) {
         nr2 = Number(secondNr.value);
         inputValues.push(nr2);
    }

    let nr3;
    if (thirdNr.value.length > 0) {
         nr3 = Number(thirdNr.value);
         inputValues.push(nr3);
    }

    if (inputValues.length > 0) {
        if (inputValues.length === 1) {
            alert(`The maximum value is : ${inputValues[0]}`);
        }
        else{
            if (inputValues.length === 2) {
                let maxVal = inputValues[0];
                if(inputValues[1] > maxVal){
                    maxVal = inputValues[1];
                }
                alert(`The maximum value is : ${maxVal}`);
            }
            else{
                let maxVal = inputValues[0];
                if(inputValues[1] > maxVal){
                    maxVal = inputValues[1];
                }
                if (inputValues[2] > maxVal) {
                    maxVal = inputValues[2];
                }
                alert(`The maximum value is ${maxVal}`);
            }
        }
    }
    else{
        alert('In order to reveal the maximum value, you must provide at least one value')
    }

    console.log(nr1, nr2, nr3);
    console.log(inputValues);
    
    
}