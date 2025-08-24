function calculateResult() {
            const a = Number(document.querySelector('#numberA').value);
            const b = Number(document.querySelector('#numberB').value);
            const c = Number(document.querySelector('#numberC').value);

            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                alert("Please enter valid numbers.");
                return;
            }

            if ((a + b) === 0) {
                alert("Division by zero error: (a + b) must not be zero.");
                return;
            }

            const result = ((a * b) + (b * c)) / (a + b);

            alert(`Result:  ${result}`);
        }