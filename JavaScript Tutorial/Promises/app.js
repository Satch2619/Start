function getProducts(callback){
  setTimeout(() => {
    callback([
        {name:"Milch", inStock: 5},
        {name:"Butter", inStock: 8},
      ]);
  }, 1000);
}

function findProduct(productName, callback) {
  getProducts((products) => {
    let product = products.find((product) => product.name === productName);
    callback(product);
  });
}

findProduct("Butter", console.log);
