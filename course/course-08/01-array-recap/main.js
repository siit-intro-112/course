console.log('Arrays recap');

/**
 * TASK:
 * Read the session students and pick a random student from the list
 */

// read the students
let studentsNr = prompt(`How many students are present?`);
studentsNr = Number(studentsNr);

let students = [];

let i = 0;
while (i < studentsNr){
    students[i] = prompt(`Input student ${i + 1}`);
    i++;
}

// pick a random student 
const randomIndex = Math.floor(Math.random() * studentsNr);
alert(`The happy winner is: ${students[randomIndex]}`);