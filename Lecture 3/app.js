const products = [
    {
      id: 1,
      title: "Product A",
      price: 9.99,
      category: "Clothing",
    },
    {
      id: 2,
      title: "Product B",
      price: 19.99,
      category: "Books",
    },
    {
      id: 3,
      title: "Product C",
      price: 29.99,
      category: "Clothing",
    },
    {
      id: 4,
      title: "Product C",
      price: 29.99,
      category: "Books",
    },
];
  
function dataUpdate(productId, categoryElement) {
    return products.map((item) => {
        if (item.id === productId) {
            return {...item, category: categoryElement}
        } else {
            return item;
        }
    })
}

const newDataUpdate = dataUpdate(2, "Electronics")
console.log(newDataUpdate);