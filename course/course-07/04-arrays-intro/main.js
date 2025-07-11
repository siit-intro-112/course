console.log('Arrays intro');

let students = ['Alex', 'Isabela', 'Ion', 'Andreea', 'Iulia', 'Raluca', 'Oana', 'Bianca'];
let grades = [10, 8.55, 9.95, 9.15, 7.95];


let i = 0;
while(i < students.length){
    // let studentGrade;
    // if(grades[i] === undefined){
    //     studentGrade = ' - ';
    // }
    // else{ 
    //     studentGrade = grades[i];
    // }

    let studentGrade = grades[i] === undefined ? ' - ' : grades[i];
    console.log(students[i] + ': ' + studentGrade);

    i++;
}