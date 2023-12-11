// Here we Lear more about loops for each 

// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach((item) => { // for each never return ! why
//     // console.log(item);
//     return item // Have to write the return keyword
// })

// console.log(values);


const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]


// Filter gives return 
const newNums = myNums.filter((num) => num > 4) // here giving the condition for return

console.log(newNums);

const smallNum = myNums.filter((items) => {
    return items < 5 // if you are using scope{} you have to write return the value
})

console.log(smallNum);

// ************************************

const numArr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNumArr= numArr.map((num) => num + 10 )
console.log(newNumArr);


// Chaining
const numOne = numArr.map((nums) => nums * 10).map((newNum) => newNum + 1)

console.log(numOne);

//************************ */

// .reduce method intrusting method use in ecommerce website

const array1 = [1 , 2 , 3 , 4 , 5 , 6]

const initialValue = 0 
const sumWithInitial = array1.reduce((accumulator , currentvalue) =>
                                    accumulator + currentvalue , initialValue) // initial value is used only one in .reduce function

console.log(sumWithInitial); 

// more usecase 

const shoppingCart = [
    {
        itemName : "js course" ,
        price : 299 
    } ,

    {
        itemName : "python" ,
        price : 99 
    } ,

    {
        itemName : "mobile dev course" ,
        price : 5999
    } ,

    {
        itemName : "data science course" ,
        price : 12999
    }
]

const totalPrice = shoppingCart.reduce((acc , curr) => acc + curr.price , 0)

console.log(totalPrice);