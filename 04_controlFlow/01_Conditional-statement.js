// Under stand about control flow in JavaScrpt 

// # 1Conditional Statement 
/*
 - if , else 
 - switch 
*/

let balance = 1000 
if (balance > 2000) console.log("great work"); // short hand for if statment 
else console.log("not good work"); // short hand else statment

if (balance < 500){
    console.log("less than 500");
}else if (balance < 750){
    console.log("less than 750");
}

// here also comes logical operators && , || 

let userLoggedIn = true
let debitCard = true 

if (userLoggedIn && debitCard){ // here I am using logical operator  
    console.log("Allow to buy course");
}

const userLoggedInFromGoogle = false 
const userLoggedInFromEmail = true

if (userLoggedInFromEmail || userLoggedInFromGoogle) console.log("Welcome");

// switch case  // this is important when we learn about redux

const month = 4
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    
    case 3 :
        console.log("march");
        break ;
    default:
        console.log("Enter correct month");
        break;
}


// terniary Operator 

// Syntax
// condition ? true :false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("not greater than 80");



// #2 Loops
/*
    - for 
    - while 
    - do , while 
*/

// #3 Control flow statment
/*
 - break 
 - continue 
 - return 
*/