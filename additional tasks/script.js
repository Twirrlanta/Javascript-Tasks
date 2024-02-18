// პირველლი თასქი

// const main = document.querySelector("main");
// main.addEventListener("click", () => {
//     if (main.style.backgroundColor === "red") {
//         main.style.backgroundColor = "green";
//     } else {
//         main.style.backgroundColor = "red";
//     }
// })


// მეორე თასქი

// let colors = ["red", "green", "blue", "yellow"];
// let i = 0;

// const main = document.querySelector("main");
// main.addEventListener("click", () => {

//     main.style.backgroundColor = colors[i];
//     i++;
//     if (i >= colors.length) {
//     return i = 0;
//     }

// })


// მესამე თასქი

// let array1 = [1, 2, 3, 4]

// let hasNegative = array1.some(array1 => array1 < 0);

// if (hasNegative) {
//     console.log("Mafia")
// } else {
//     console.log("araris")
// }


//მეოთხე თასქი

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];

// const result = products.filter(item => item.category === "Electronics");
// console.log(result);
 

// 5. იპოვეთ ყველაზე იაფრი პროდუქტი , Reduce მეთოდით

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];

// const result = products.reduce((item, price) => price.price, 0);
// console.log(result);


// 6.

// დაასორტირეთ პროდუქტები ფასის მიხედვით

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];

// const result = products.sort((a, b) => a.price - b.price);
// console.log(result)

// 7

// წამოიღეთ დეითა ეიპიაიდან კონკრეტულად (Id, Title, Price)

// fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//         const result = data.map(item => {
//             return { id: item.id, title: item.title, price: item.price }
//         })
//         console.log(result);
//     })