// ************* ARRAY ************

// array declaration 
const myArr = [0 , 1 , 2 , 3 , 4]
console.log(myArr);

// We can store similar or different type of data in sequence 
let myHeros = ["asta" , "naruto" , "itadori" , "deku"]
console.log(myHeros);

// We can add a new elements with .push method which add the element in the end
let myArr2 = [11, 33 , 51 , 10]
myArr2.push(55)
console.log(myArr2);

myArr2.pop () // Use this for undo for .push method // here we don't give parameter
console.log(myArr2);

// We can also add element at 0th index // means at beginning 
myArr2.unshift(5)
console.log(myArr2); 

myArr2.shift() // Here we don't give paramete 
console.log(myArr2); // This is used to undo .unshift  method 
 
// for checking the number is present or not we will use .include function 
let newArr3 = [25 , 65, 85 , 98 , 100]
console.log(newArr3.includes(5)); // 5 is not included in newArr3 giving out false // This is Questionary method which give ans in true or false  

// we can also check what index in elment is // This is also Questionary method
console.log(newArr3.indexOf(25)); // This is in the index 0

const newArr5 = newArr3.join() // Add arrays to String // it bind 2 array and covert it into String datatype
console.log(newArr3);
console.log(newArr5);

// Need to learn about slice and splice method these are interview question 
// Slice and Splice 
console.log("SLICE AND SPLICE");

const myn1 = myArr.slice(1,3)
console.log("A " , myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("B " , myArr);
console.log(myn2);

// Q : What is the difference between slice and splice 
/*
- slice 
 ~ it does not manipulate the original array
 ~ it cut the number which is given, like let say an array of natural number and I want to exclude the number from ( 5 - 8)
   then it start excluding the number from given begining number 5 but does not include number 8

- splice 
 ~ it manipulate the original array 
 ~ 
*/