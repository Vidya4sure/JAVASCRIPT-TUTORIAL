// Basic of javascript


/*
## [Variables] : named container for storing data (Values).
  - let 
  - const [Cannot change value further]
  - var [AVOID USING THIS !!]
  - we can directly declare any this apart from using above variables.
*/

let temp  // assigned (undefined)
const accountId = 144553  // cannot change with this keyboard because [const]
let accountEmail = "hansdavsh@gmail.com"  
var accountPassword = "MAWAYSHIdji@03" // avoid using [var]
let accountState 




accountCity = "Ranchi" // Prefer not to declare by this type 

// accountId  = "2" // not allowed  // Here we cannot change 'const' value.

accountEmail = "mawayshi@gmail.com"
accountPassword = "1010101"
accountCity = "Bokaro"

console.log(accountId);

/*
Prefer not to use [var] 
because of issue in block scope and functional scope 
*/


console.table([accountId , accountEmail , accountPassword , accountCity , accountState ])
// By using above console.table the output arranged in table order. 