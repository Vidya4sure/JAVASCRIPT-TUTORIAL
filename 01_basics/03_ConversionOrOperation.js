//  [CONVERSION OF DATA TYPES]
/*
 Let say I want to store a score of a game match 
*/

// case 1 
let score = 33

//case 2
let score2 = "33"  // Someone puts this in String value 

// case 3 
let score3 = "33abc" // Someone put string and number value 

// case 4 
let score4 = null

// case 5 
let score5 = true

// case 6 
let score6 = undefined

// Checking the typeof 
// -For case 1
console.log(typeof score);

// -For case 2
console.log(typeof (score2));

// - For case 3 
console.log(typeof (score3)) 


// Now we pass all the above score and check the type and value if I want only number 
// Here we are converting abover score in number.
let valueInNumber = Number(score3)
console.log(typeof valueInNumber);
console.log(valueInNumber)


/*
 - "33" => 33
 - "33abc" => NaN [Not a Number]
 - true => 1 ; false => 0


*/

let isLoggedIn = 1 


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn);
console.log(booleanIsLoggedIn);

/*
 - 1 => true ; 0 => false; number other than 0 or 1 => false;
 - "" => false 
 - "Vidya" => true 
*/

let someNumer = 33 

// Converting the above type into string
let stringNumber = String(someNumer)
console.log(stringNumber);
console.log(typeof stringNumber);