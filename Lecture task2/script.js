// const input = [1,2,3,4,5,6,[7,8],9,10]

// function myFunction(data) {
//     let result = [];
//     for(const elements of data){
//         if(Array.isArray(elements)) {
//             result = result.concat(elements);
//         } else {
//             result.push(elements);
//         }
//     }
// }

// console.log(myFunction(input));

// function recursive(n) {
//     if(n === 1) {
//         return 1;
//     }

//     return recursive(n - 1) * n
// }

// console.log(recursive(6));

// const numbers = [1,2,3,4,5,6,7,8,88,88]
// const result = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0)

// console.log(result);

/* const students = [
    {name: "Luka", age: 22, salary: 50},
    {name: "George", age: 17, salary: 150},
    {name: "Saba", age: 15, salary: 1.5},
    {name: "David", age: 19, salary: 0},
    {name: "Nick", age: 30, salary: 76},
    {name: "Levani", age: 27, salary: 89},
    {name: "Tedo", age: 12, salary: 0},
];

let result = students.reduce((res, item) => {
    if(item.salary === 0) {
        res.unemployed++;
    }

    if(item.age >= 18){
        res.adult++;
    } else {
        res.teen++;
    }

    return res;
}, {adult: 0, teen: 0, unemployed: 0})

console.log(result)
*/

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances" },
//   { name: "Running Shoes", price: 89.99, category: "Sportswear" },
//   { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
//   { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
// ];

// const result = products.reduce((sum, item) => {
//     return sum + item.price;
// }, 0)

// console.log(result) // fasebis dajameba !!!

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances" },
//   { name: "Running Shoes", price: 89.99, category: "Sportswear" },
//   { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
//   { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
// ];

// const filterMethod = products.filter(item => item.category === "Electronics");
// console.log(filterMethod)

// if(filterMethod) {
//     console.log(`We have ${filterMethod.length} electronic devices.`)
// }

// const book = products.filter(item => item.category === "Books")

// if(book) {
//     console.log(`We have ${book.length} books.`)
// }

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Books" },
//   { name: "Running Shoes", price: 89.99, category: "Books" },
//   { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
//   { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
// ];

// const result = products.map((item) => {
//   const { price, category, name } = item;

//   if (item.category === "Books") {
//     return `Item Name: ${name}, Category: ${category}, Price: ${price}`;
//   }
// });

// console.log(result);
