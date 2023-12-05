// Quite often we need to perform a similar action in many places of the script 

// For example we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else 

// Function allow the code to called many times without repetation.

// For declaring function 
function showMyName(){
    console.log("Hello everyone !!");
}

// showMyName - this is just refering the function - later lern on REACT
showMyName() // Here i am excuting the function 

// Let write a function which sums the two number 

function AddNumber (num1 , num2){ // here the variable are called parameters 
    return num1 + num2 
}

console.log(AddNumber(10 , 21)); // Here this is called arguments

// **********************************


function loginUserMessage(name){
    if (name === undefined){
        return console.log("Please enter your name");
    }
    return console.log(`${name} just logged In`);
}

loginUserMessage("Vidya Sagar")

// *****************************************

// Here's the problem statement that when i don't know how many arguments there will 
// be pass For example in e-commerce website ADD TO CART section , where i don't know how 
// many items will be added ?

// For the above problem can be solved 
function calculateCartPrice (...num){ // here this is called REST operator
    return num 
}

console.log(calculateCartPrice(200 , 300 , 500 , 600)); // by that way this will store in array format

// ********************************

// Here I am declaring an object
const user = {
    username : "vidya" ,
    prices : 199
}

const user1 = {
    username : "mantu yadav" ,
    prices : 1000
}

// Here i am making a function in which passing the user object
function handleObjects (anyobject){
    if (!anyobject){
        return console.log("Try again");
    }
    return console.log(`User name is ${anyobject.username} and the price is ${anyobject.prices}`);
}

// You can also directly pass the an object inside the handleObject function 
handleObjects({
    username : "Ankit" ,
    prices : 500
})

handleObjects(user1)
handleObjects(user) 
handleObjects()

// You can also pass an array in object 

const myNewArray = [200,400,100,600]

function SecondValue (getArray){
    return console.log(getArray[1]);
}

SecondValue(myNewArray)