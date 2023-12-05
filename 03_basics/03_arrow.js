// let say you want to register your user 

const user = {
    username : "vidya" ,
    price : 999,

    welcome :function(){
        console.log(`${this.username} , welcome to website`); // this make corrent context 
        // console.log(this);
    }
}

user.welcome()

user.username = "sam"
console.log(user.username);
user.welcome()

// console.log(this); // (this) keyword give different context with different this 
// like if you run console.log(this) brower then it give diffrent context 
// and if you run console.log(in) node or in vscode without user brower then is give {} object reference

function chai (){
    let username = "vidya"
    // console.log(this); 
}

// Object kay context mai use kar saktay hai  par function kay context mai nhi kar saktay ?
function code (){
    let username = "mantu"
    // console.log(this.username); // we can able to use like this
}

chai()


// let learn more about how we can declare a function
// After declaring the function you have to call him
const arrowFn = () => {
    username = "vidya"
    console.log(this);
}

arrowFn()
// this keyword ko puchna hai kaisay work hota hai 
// How arrow function is diffrent form normal function 
let func = () => {} // this is arrow function  // here you have to write return 

let func1 = (num1 , num2) => (num1 + num2) // here you don't need to write return 

// you can also write like this 
let func2 = (num3 , num4 ) => num3 - num4 // but this get problem when you want to store object for object you have to use {} curly braces then you have to use return 

let func3 = () => ({username : "vidya sagar" , rollNo : 122 })
// implicit and explicit return 

console.log(func3()); // works very well 


// *************************************

// https://javascript.info/arrow-functions-basics#rewrite-with-arrow-functions
// Rewrite with arrow function 

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask (
    "Do you agree",
    () => console.log("you agree"),
    () => console.log("You canceled the execution")
)