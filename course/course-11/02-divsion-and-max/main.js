console.log('Divsion and max of 2 numbers!');

// 
const nr1Elem = document.querySelector('#nr-1');
const nr2Elem = document.querySelector('#nr-2');

// 
function divisionAndMax(){
    let inputValues = [];

    // reading the first user value
    let nr1;
    if(nr1Elem.value.length > 0){
        nr1 = Number(nr1Elem.value);
        inputValues.push(nr1);
    }

    // reading the second user value
    let nr2;
    if(nr2Elem.value.length > 0){
        nr2 = Number(nr2Elem.value);
        inputValues.push(nr2);
    }

    console.log(inputValues);

    // computing division
    if(inputValues.length === 2){
        // I can compute the division
        if(inputValues[1] == 0){
            alert('Cannot compute division by 0!');
        }
        else{
            const division = inputValues[0] / inputValues[1];
            alert('Division: ' + division);
        }
    }
    else {
        alert('In order to compute the division, you have to provide both values!');
    }


    // determining max value
    if(inputValues.length > 0){
        // I can compute max
        if(inputValues.length === 1) {
            alert('Max value is: ' + inputValues[0]);
        }
        else {
            // alert('Max value is: ' + Math.max(inputValues[0], inputValues[1]));
            if(inputValues[0] > inputValues[1]){
                alert('Max value is: ' + inputValues[0]);
            }
            else{
                alert('Max value is: ' + inputValues[1]);
            }
        }
    }
    else{
        alert('In order to compute the maximim value, you have to provide at least one value!');
    }


}