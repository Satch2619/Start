let success = true;

function getProducts(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(success) {
        resolve([
          {name:"Milch", inStock: 5},
          {name:"Butter", inStock: 8},
        ])
      }
      else{
        reject("Fehler");
      }
    }, 1000);
  });
}


//function findProduct(productName, callback) {
//  getProducts((products) => {
//    let product = products.find((product) => product.name === productName);
//    callback(product);
// });
//}

//findProduct("Butter", console.log);
