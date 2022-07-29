const productsData = require('../data/products.json')
class ProductsController {
    _products;

    constructor() {
        this._products = productsData;
    }

    getAll() {
        return this._products;
    }

    search(query) {
        return this._products.filter(p => p.name.includes(query))
    }
}

module.exports = new ProductsController();
