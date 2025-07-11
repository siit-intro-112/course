let students = [
    'Raluca', 
    'Alex', 
    'Bianca', 
    'Oana', 
    'Iulia',
    'Ion',  
    'Isabela', 
];

let presentStudents = [];
let psIndex = 0;

let i = 0;
while (i < students.length) {
    const isPresent = confirm(`Is ${students[i]} present?`);
    if(isPresent){
        presentStudents[psIndex] = students[i];
        psIndex++;
    }
    
    i++;
}

let doExtract = true;
while (doExtract) {
    const randomIndex = Math.floor(Math.random() * presentStudents.length);
    alert(`The chosen one is: ${presentStudents[randomIndex]}`);
    
    doExtract = confirm('Continue picking students?');
}