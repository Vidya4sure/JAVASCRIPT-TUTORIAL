// [MEMORY MANGEMENT IN JAVASCRIPT]
// [HOW MEMORY IS STORED IN JAVASCTRIPT]

/*
 # There are two types of memories 
 - Stack memory  (used by Primitive data type) [You got a 'Copy']
 - Heap memory   (used by Non-Primitive data type) [you got a 'Reference']
*/

let myYoutubeName = "Vidya Sagar Hansda"


// Here this is [Primitive]

let anotherName = myYoutubeName
anotherName = "MawayshiGuywala"

console.log(anotherName);
console.log(myYoutubeName);

// Here this is [Non-Primitive]
// object example
let userOne = {  
    email: "hansdavsh@google.com" ,
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "mawayshi@google.com" 

console.log(userOne);
console.log(userTwo);