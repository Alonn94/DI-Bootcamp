const objArray= require("./products.js");


function findProduct(productName) {
    const product = objArray.find ( i => i.name === productName);

    if (product) {
        console.log("Product found" ,product.name)
    }

}

findProduct("phone");