// Global and block scope 

// Nested Scope 
function one(){
    const username = "vidya"

    function two (){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website); - 

    // two()
}

one()

//Here we are learning about scoping 

if (true) {
    const username = "vidya"
    if (username === "vidya"){
        const website = " youtube"
        console.log(username + website );
    }

    // console.log(website); 
}

// **************************** intresting *****************

addone(5)

function addone (num){ // here addone is function 
    return +1
}


// declare + hold in variable // hoisting 
const addTwo = function(num){ // This is also a function but it called as express  // can store anything 
    return +2
}

addTwo(5) // this cannot done before fuction 