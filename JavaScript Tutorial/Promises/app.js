function getProducts(){
  return [
    {name:"Milch", inStock: 5},
    {name:"Butter", inStock: 8},
  ];
}

function findProduct(productName) {
  let products = getProducts();
  let product = products.find((product) => product.name === productName);
  return product;
}

console.log(findProduct("Butter"));
