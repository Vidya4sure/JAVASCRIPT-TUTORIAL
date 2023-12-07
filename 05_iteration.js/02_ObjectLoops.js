const myObject = {
    js : "javascript" ,
    cpp : "c++" ,
    rb : "ruby" ,
    swift : "swift by apple"
}


//( For in ) is used for Object iteration 
// For is also can be used for other object 
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

// can for in is used in array ? let see 
// Yes we can used 
const newArr = [10 , 22 , 55 ,954 , 54]

for (const index in newArr) {
    console.log(newArr[index]);
}

//Map is only is used in for of loop 

