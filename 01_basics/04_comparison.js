/*
 [COMPARISON]
*/

// The value comes in boolean and these comparison are easy to understand

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);


// Problem comes where we compare two different datatypes 
console.log("Problems come from here");
console.log("2" > 1);
console.log("02" > 1);
// console.log(1 = "1");


/*
    The reason is that an equality check == and comparison >< >= <= 
    work differently.

    Comparisons convert null to a number,treating it as 0.
    That's why (3) null >= 0 is true and (1) null > 0 is false
*/


// [AVOID THESE TYPE OF COMPARSION]
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // here it give true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// STRICT CHECK 
// === (This checks the value and also there datatype strictly)

console.log("2" === 2);

