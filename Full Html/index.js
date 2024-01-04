localStorage.setItem("name", "Shivpal");

let arrObj = [{ id: 1, product: "Jeans" }];

localStorage.setItem("products", JSON.stringify(arrObj));

let products = JSON.parse(localStorage.getItem("products"));
console.log(products);
