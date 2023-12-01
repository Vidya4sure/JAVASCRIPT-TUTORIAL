// Singleton 

// - HERE WE LEARNT ABOUT "object literals"

const mySym = Symbol("key1")

// Here I am declaring object and storing keyword and value 
// Here JsUser Object contain collection of key and value pairs 
const JsUser = {

    // key : value 

    name : "Vidya" ,
    "full name" : "vidya sagar hansda",
    [mySym] : "myKey1",
    age : 20 ,
    location : "Ranchi",
    email : "hansdavsh@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Mondays", "Saturday" ]
}

// There are two ways to Accessing values from objects
// Method - #1  This is a basic method 
console.log(JsUser.email)

// Method - #2 // This is recommend to used for interviews 
console.log(JsUser["email"])

console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "mawayshi@gmail.com"
// Object.freeze(JsUser)  - .freeze method is used for freezing any changes in the values

console.log(JsUser); 



JsUser.greeting = function(){
    console.log("Hello js User");
}

JsUser.greetingTwo = function(){
    console.log(`HELLO JS USER ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
