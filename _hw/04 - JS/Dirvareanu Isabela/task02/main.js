function findMax() {
    const inputA = Number(document.querySelector('#numberA').value);
    const inputB = Number(document.querySelector('#numberB').value);
    const inputC = Number(document.querySelector('#numberC').value);

    const Inputs = [inputA, inputB, inputC];
    const numbers = [];

    let i = 0;
    while (i < Inputs.length) {
        if (!isNaN(Inputs[i])) {
            numbers[numbers.length] = Inputs[i];
        }
        i++;
    }

    if (numbers.length === 0) {
        alert("Please enter at least one number.");
    } else {
        let max = numbers[0];

        i = 1; 

        while (i < numbers.length) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
            i++;
        }
        alert(`Maximum number is: ${max}`);
    }
}