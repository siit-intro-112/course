
//1. Compute the sum of odd numbers from 1 to n.

let userNr = prompt(`Input a value:`);
userNr = Number(userNr);

 let i = 1;
let sum = 0;

while (i <= userNr) {

    sum = sum + i;

    alert(i)

    i = i + 2;
}

alert(`The sum of the odd numbers from 1 to ${userNr} is:  ${sum}.`);


//2. Send to output all numbers from 1 to n (read n from input) dividing with 3 or 5.

let k = 1
while (k <= userNr) {
    
 if (k % 3 ===0 || k % 5 === 0 ) {
    alert( k + ` Your number is divisible with 3 or 5.`)
   

    
 } else {
    alert( k + ` Your number is NOT divisible with 3 or 5.`)
    
 }
 k++;
}

//3. Find the maximum number in an array. 

let arrayLength = prompt("How many elements will the array contain?");
arrayLength = Number(arrayLength);

let arry = [];
 i = 0;

while (i < arrayLength) {
  arry[i] = prompt(`Input element ${(i + 1)}: `);
  arry[i] = Number(arry[i]);
  i++;
}
console.log(arry);

let max = arry[0];
i = 1;

while (i < arrayLength) {
  if (arry[i] > max) {
    max = arry[i];
  }
  i++;
}

alert(`The maximum value of the array is: ${max}`);



//(Extra-mile)  Given a list of elements, output the number of elements.

let listElements = [];
let list = prompt('Introduce the list elements :')
listElements = list.length 
alert(`This is the number of list's elements : ${list.length} `)

//nu stiu cum sa nu se ia in calcul si "," si space-ul 😖