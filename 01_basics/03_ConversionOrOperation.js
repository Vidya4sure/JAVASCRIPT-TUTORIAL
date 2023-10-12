//  [CONVERSION OF DATA TYPES] && [OPERATIONS]
/*
 Let say I want to store a score of a game match but the user puts the different input 
 So how can i convert this input to one data types
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
 ## Input = type conversion value 

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
// Will give the type of to String 

// ************************** OPERATIONS *********************
console.log("From here output of operation");

let value = 3 

let negValue = -value
console.log(negValue);

// There are different types of operation 
// Arithimatic Operation 
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2 raise to power 2 value = 4
console.log(2**3); // 2 raise to power 3 value = 8
console.log(2/3); 

// Modulus operation 
console.log(2%3); 


let a = 10 
let b = 20 
console.log(a + b);
// this will give the output of 30. which is a basic arithitmatic 

// Some confusing conversion 
console.log("some confusing type conversion");
console.log("1" + 2);
console.log(1 + "2");
console.log (2 + '3');
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// This code are good for examination, but not good for real world
console.log(3 + 4 * 5 % 3);

// Some tricky and confusion conversion uneccesary 
console.log(true);
console.log(+true);
console.log(+false);
console.log(+"");
// ** we should never do this ! 


// This is not good practice
let num1 , num2 , num3 
num1 = num2 = num3 = 2+2 


// prefix and suffix study about this in mdn
// increment and decrement operation 
let gameCounter = 100 ;
gameCounter++ ;
console.log(gameCounter);
gameCounter-- ;
console.log(gameCounter);



//Go to mdn and learn about prefix and suffix 
// And also about type conversion