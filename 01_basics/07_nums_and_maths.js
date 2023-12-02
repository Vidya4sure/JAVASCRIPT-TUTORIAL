/*
 ***************** NUMBERS *************
*/

// Let say you want to store a number 
// There are two ways to store 

//01 - By general way
const score = 400 
console.log (score) // Here automatical define this is number type 

//02 - By making this an object type  
const balance = new Number(100) // Here we espiscially cast that this is a [NUMBER]
console.log(balance) 
// This will give many value to acess // many parameter


// like here are some value that give acess
console.log(balance.toString())
console.log(balance.toString().length);

console.log(balance.toFixed(3)); // This properties will use many time
// This will give the decimal number that what you give  

const otherNumber = 123.5486
console.log(otherNumber.toPrecision(3)); // Use this we understable

const hundreds = 10000000 // How to read easily 
console.log(hundreds.toLocaleString('en-IN')); // Use this method to make it readable


//************* MATHS *************

// This math library or math language comes along with javaScript by default
console.log("Hero start math");

// In math library there are alot of function for use her are some of them 
console.log (Math);
console.log(Math.round(7.5)); // round off the number = 8
console.log(Math.abs(-7)); // Give Absoulute number = 7 // Absolute means always gives positive number

console.log(Math.ceil(11.2)); // Give me higher round off number = 12
console.log(Math.floor(11.8)); // Give me lower round off number = 11

console.log(Math.min(4, 6 , 84 , 19)); // Give me minimum number = 4
console.log(Math.max(448, 87 , 97, -8, 0.5)); // Give me maximum number = 448


// ************ Most Important ***************

// Here the important method .random()
console.log(Math.random()); // It's genrate random no from 0 - 1 include decimals number between them 

// Let say I want numbers from 1 - 9. So for that we will multiple * 10
console.log(Math.random() * 10); // but here also come 0  // So for avoid that we will add +1
console.log(((Math.random()) * 10 ) + 1); // So here it will generate number from 1 - 9

// So in the above case it will also gerate decimals number from 1 - 9 
// For this we will use .floor function which roundoff to its lowest value

console.log(Math.floor(((Math.random()) * 10 ) + 1)); // Here it will only generate absolute number from 1- 9

// Now here are some general formula for above generator 

// Q : Let's Say I want to generate numbers from 10 - 20 

const min = 10
const max = 20

// we will change below number this to general formula 
// console.log(Math.floor(((Math.random()) * 10 ) + 1))
console.log(Math.floor(((Math.random()) * ((max - min) +1) ) + min)) // This will generate numbers from 10 - 20

// Q : 100 - 200

const NewMin = 100
const NewMax = 200

console.log(Math.floor(((Math.random()) * ((NewMax - NewMin) +1) ) + NewMin))