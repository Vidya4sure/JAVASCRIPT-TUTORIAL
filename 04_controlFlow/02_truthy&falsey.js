// Truthy value and falsey value 

const usereamail = "hansdavsh@gmail"


// just yaha maan liya hai 
if (usereamail){ // here i just check that useremail is present
    console.log("got your email");
}else {
    console.log("Don't have user email");
}

// another example 

const newUserEmail = ""
if (newUserEmail){
    console.log("got you email");
}else {
    console.log("haven't got your email");
}


// another one example 
const nayaUser = []
if (nayaUser){
    console.log("got you email");
}else {
    console.log("haven't got your email");
}


// find the difference between 
// "name"  , "" , []

/*
 falsy value 
 - false , 0 , -0 , BigInt , 0n , "" , null , undefinded , NaN
 
*/

/*
 Truthy value 
 - true , " " , "0" , 'false' , [] , {} , function(){} , 
*/

// Checking an array
const arr = []
if (arr.length === 0){
    console.log("array is empty");
}

// Checking an Object 
const newObj = {}
if (Object.keys(newObj).length === 0){
    console.log("object is empty");
}