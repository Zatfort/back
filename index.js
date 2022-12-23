const ProductManager = require("./class/ProductManager")

//instanciar la clase

const newProductManager = new ProductManager('database/db.json')
newProductManager.getProducts()
newProductManager.addProduct()
newProductManager.getProductById()