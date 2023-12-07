
const coding = ["js", "ruby" , "java" , "python" , "cpp"]

// Most used 

// coding.forEach( function (item) {
// console.log(item);
// })


// this is basic
// we can used arrow function 
// coding.forEach((item) => {
//     console.log(item);
// })

// function printeMe (item) {
//     console.log(item);
// }

// coding.forEach(printeMe) // Here we just giving referance but not ()

coding.forEach ((item , index , wholeArr) => {
    console.log(item , index , wholeArr);
})

// This is very comman used case 

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    } ,
    {
        languageName : "java",
        languageFileName : "java"
    } ,
    {
        languageName : "C plus",
        languageFileName : "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item);
})

// This is very usefull for database

const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];

transactions.forEach((list) => {
   
})
