// This is part 2 of arrays 

const marvel_heroes = ["thor" , "Ironman", "spiderman"]
const dc_heroes = ["superman" , "flash" , "batman"]

// marvel_heroes.push(dc_heroes) // .push method add the 
// console.log(marvel_heroes);

const heros = marvel_heroes.concat(dc_heroes) // .concat mehthod helps is expand the element when we are combining two arrays or more
console.log(heros);  

// Developer also use spread operator // people prefer this over concat 
const allHeros = [...dc_heroes , ...marvel_heroes] // This operator spread the elements of the array 
console.log(allHeros);


// Let say I have an array having inside an array and I want to flat it then 
const anotherArray = [1,2,3, [4,5,6] ,[7 , [8,9]]]

const realUseableArray = anotherArray.flat(Infinity) // Here Infinity parameter is used for how much depth you want

console.log(anotherArray);
console.log(realUseableArray);

// Let see some more methods 
console.log(Array.isArray("Vidya")); // Here .isArray is checking this value is array or not
console.log(Array.from("Vidya"));  // By using .from we can covert a value into array 



console.log(Array.from({name : "Vidya"})); // Intresting thing // This is giving empty array bracket
// Let see something more about thing 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)); // Returns an array from a set of elements 