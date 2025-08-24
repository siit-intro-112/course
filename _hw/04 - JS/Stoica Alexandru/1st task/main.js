const firstNr = document.querySelector('#nr-1');
const secondNr = document.querySelector('#nr-2');
const thirdNr = document.querySelector('#nr-3');

function calculate(){
    let nr1 = Number(firstNr.value);

    let nr2 = Number(secondNr.value);

    let nr3 = Number(thirdNr.value);

    if ((nr1 + nr2 === 0)) {
        alert('The divider should not be 0!');
        return;
    }

    let result = (((nr1 * nr2) + (nr2 * nr3)) / (nr1 + nr2));
    alert(`The result is : ${result}`);

    console.log(nr1, nr2, nr3);
    
}

