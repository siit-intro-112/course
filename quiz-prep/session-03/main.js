console.log('Session 3 recap');


// generates a value betweenn 1 ... 10
let value = Math.floor(Math.random() * 10) + 1;

console.log(value);

// if value is odd
if(value % 2 === 1){
    alert(`Boys win!`);
}
else {
    alert(`Girls win!`);
}

//
switch (value) {
    case 1:
        alert('Icecream')
        break;
        
    case 2:
        alert('Cookies')
        break;

    case 3:
        alert('Candy')
        break;

    default:
        alert('A salad!')
        break;
}