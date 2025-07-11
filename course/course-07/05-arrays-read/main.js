console.log('Reading Arrays');

// STEP: initialization as an empty array
let students = [];
let hasCamOn = [];

// STEP: read tha number of students to be inserted in the array
let studentsNr = prompt('How many students are in the group?');
studentsNr = Number(studentsNr);

// STEP: use an iteration to add each element of the array
let i = 0;

while (i < studentsNr) {
    // students[i] = prompt('Input student number ' + (i + 1) + '  name');
    students[i] = prompt(`Input student number ${i + 1} name`);
    hasCamOn[i] = confirm(`Does ${students[i]} have camera ON?`)   
    
    i++;
}