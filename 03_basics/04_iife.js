// Immediately Invoked Function Expression (IIFE)
// IIFE stands for Immediately Invoked Function Expression. It's a JavaScript design pattern used to create a function and execute it immediately after its declaration.
// ()()
// protoecting from groble pollution 
(function chai (){

    // named IIFE
    console.log("DB CONNECTED");
})();

(function daal(){
    console.log("Yes i am connected");
})();


( (newName) => (
    console.log(`khana ban gaya hai ${newName}`)
) )(`vidya`);