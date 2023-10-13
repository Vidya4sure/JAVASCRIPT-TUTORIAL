/*
 [PRIMITIVE DATA TYPE]
*/

// 7 Types : String, Number, Boolean , null, undefined, Symbol
//           BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail ;
let userPassword = undefined

const id = Symbol ('123')
const anoterId = Symbol ('123 ')

const bigNumber = 34658484545161917166n // represent 'n' in last and it automatically convert it into BigInt 


// Lets check these symbol data types are equal or not 
console.log(id === anoterId);  // value come false 
// which conclude Symbol datatype make value unique  




/*
 [NON-PRIMITIVE]  Reference
*/

/*
 Array, Objects , Functions
*/

const heros = ["perman" , "mightraju" , "astroboy"]
let myObj = {
    name : "Vidya Sagar Hansda" ,
    age : 22
}

const myFunction = function (){
    console.log("hello world");
}

// These are used to find the type of Data type 
console.log(typeof bigNumber);  // this will give 'bigint'
console.log(typeof outsideTemp); // this will give 'object'
console.log(typeof myFunction);