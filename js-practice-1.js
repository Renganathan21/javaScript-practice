const arr = [1,2,3,4];
for(let i in arr){
    console.log(arr[i]);
}


arr.forEach((item)=>{
    console.log(item);
})

const userDetails = {
  name: "Alice",
  age: 28,
  email: "alice@example.com",
  city: "New York",
  isMember: true
};
Object.entries(userDetails).forEach(([key,value])=>{
    console.log(key , value);
    
})

Object.values(userDetails).forEach((value)=>{
    console.log(value);
})

Object.keys(userDetails).forEach((key)=>{
    console.log(key);
})


const products = [
  { name: "Laptop", price: 75000, stock: 10 },
  { name: "Phone", price: 35000, stock: 25 },
  { name: "Tablet", price: 22000, stock: 15 }
];

products.forEach((product) => {
  console.log(`${product.name} costs ₹${product.price} and we have ${product.stock} in stock.`);
});

products.forEach((product)=>{
    Object.entries(product).forEach(([key,value])=>{
        console.log(key,value);
    })
})










