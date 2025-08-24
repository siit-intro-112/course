function calculateSum() {
  let n = Number(document.querySelector('#number1').value);
  let m = Number(document.querySelector('#number2').value);

  if (isNaN(n) || isNaN(m)) {
    alert('Please enter valid numbers for both n and m.');
    return;
  }

  let numbers = [n, m];
  let start = numbers[0];
  let end = numbers[0];
  
  let i = 1;
  while (i < numbers.length) {
    if (numbers[i] < start) {
      start = numbers[i];
    }
    if (numbers[i] > end) {
      end = numbers[i];
    }
    i++;
  }

  let sum = 0;
  
  while (start <= end) {
    if (start % 2 === 0) {
      sum = sum + start;
    }
    start++;
  }

  alert(`Sum of even numbers between ${n} and ${m} is: ${sum}`);
}