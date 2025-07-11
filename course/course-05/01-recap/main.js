// display the message in the DevTools console
// alert('main.js is loaded...')


/* Calculate the average speed of a trip */

/*
 STEP 1: Input the distance in KM 

 STEP 2: Input the duration in mins.

 STEP 3: Convert the time from mins into hours 

 STEP 4: Calculate the avrerage speed: distance / timeInHrs

 STEP 5: Display the calculated average speed
 */


 // STEP 1: Input the distance in KM 
let distance = prompt('Input the distance in KM');
distance = Number(distance);

// STEP 2: Input the duration in mins.
let time = prompt('Input the duration in MINUTES');
time = Number(time);

// STEP 3: Convert the time from mins into hours 
time = time / 60;

// STEP 4: Calculate the avrerage speed: distance / timeInHrs
let averageSpeed = distance / time;

// STEP 5: Display the calculated average speed
alert('The average speed was ' + averageSpeed + ' km/h');