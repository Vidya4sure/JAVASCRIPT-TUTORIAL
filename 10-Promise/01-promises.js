// Let's about how to make promises in JavaScript


const promisesOne = new Promise (function(resolve , reject){

    // Do an asyn task 
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // This is a method
    } , 1000) // function that will execute after 1 second 
})
 

// inside .then function there get an automatical recieved argument from 
promisesOne.then(function (){ // .then is direct connection with resolve
    console.log("Promised consumed"); // inside .then you will get a callback function
})


new Promise (function(resolve , reject){
    setTimeout( function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        // you can also pass an data in this function
        resolve({username : "vidya" , email : "hansdavsh@gmail.com" })
    } , 1000)
})


// All the values will retured to the .then function
// after passing the value in resolve function you can expect an data that should
// pass in .then function
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise (function(resolve , reject){
    setTimeout( function(){
        let error = true
        if (!error){
            resolve({username : "vidya sagar" , password : "122330"})
        }else {
            reject('ERROR : Something went wrong')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username // from here where the value is retured
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The Promise is either resolved or rejected"))



const promisFive = new Promise(function(resolve , reject){
    setTimeout( function(){
        let error = false
        if (!error){
            resolve({username : "javascript" , password : "122330"})
        }else {
            reject('ERROR : JS went wrong')
        }

    }, 1000)
})


// async await => it wait for completing the work then executed
async function consumePromiseFive (){
    const response = await promisFive
    console.log(response);
}

consumePromiseFive()