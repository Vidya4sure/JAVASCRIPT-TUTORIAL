// ************ Date **********
// JavaScript Date object represent a single moment in the time in a platform-independent 
// format. Begin from January 1 , 1970, UTC (the epoch )

// Date is calculated in milisecond

let myDate = new Date()
console.log(myDate); // 2023-11-17T13:43:02.345Z give this type of output 

// If we use .toString() function its convert it more readable form 
console.log(myDate.toString());

// Let see more methods and what there uses 
console.log(myDate.toISOString());
console.log(myDate.toJSON());

// This function convert the Date object into more readable way 
console.log(myDate.toLocaleString()); // 17/11/2023, 7:18:51 pm - This format

// This give more readable way  / Specifice
console.log(myDate.toDateString());  //Fri Nov 17 2023

// Q : What is the type of Date method 
console.log(typeof myDate); // It is object type

// I can also create or pass my own date and type in Date object 

// Here the javaScript Calculate month from 0 like 0 - jan , 1 - feb
let myCreatedDate = new Date(2023 , 11 , 17)
console.log(myCreatedDate.toLocaleString());

// You can also pass more parameter and according to your parameter it automatically convert it
let myNewDate = new Date (2023 , 5 , 17 , 5, 21, 5)
console.log(myNewDate.toLocaleString());

// We can also formate out specifie date 
let newDate = new Date ("12-03-2023") // it will give me 3/12/2023
console.log(newDate.toLocaleString());

// We also have timeStamp 
// let myTimeStamp = new Date () // we can create object like this 

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1700234496899 - This is a calculated milisecond from january 1 1970 midnight 

