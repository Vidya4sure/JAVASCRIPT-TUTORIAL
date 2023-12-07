// array specific loops 

// for of 

// ["" , "" , ""]
// [{},{},{}]

const arr = [1 , 2 , 3, 4 , 5]

// very convient against for loop 
for (const num of arr) { // Object is use in brodan way  
    console.log(num);
}

const greetings = "hello world"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps
// Array jaisay he hai but iterate kartay time kuch hota hai ?

// Maps Store unique value
const map = new Map()
map.set('IN' , 'India')
map.set('US' , 'United State of America')

console.log(map);

for (const key of map) {
    console.log(key);
}

// for priting different different of Map 

for (const [key , value] of map) {
    console.log(key , ':-' ,value);
}

const myGame = {
    'game1' : 'NFS' ,
    'game2' : 'black ops'
}

// Object is not iteratable like a map
// for (const [key , value] of myGame) {
//     console.log();
// }
