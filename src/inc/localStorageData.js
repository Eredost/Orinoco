/**
 * Object used to add an abstraction layer to the localStorage and manages all the methods
 * related to products and orders
 */
let localStorageData = {
    init: function () {
        // Add the products JSON string to the localStorage if it does not exist
        if (null === localStorageData.getProducts()) {
            localStorage.setItem('products', JSON.stringify({}))
        }
    },

    /**
     * Get the JSON string of products from localStorage and transform it into a
     * JavaScript object
     *
     * @returns {Object}
     */
    getProducts: function () {
        return localStorage.getItem('products');
    },

    /**
     * Adds a product to localStorage by incrementing the value or creating a new
     * key-value association
     *
     * @param {string} productId
     */
    addProduct(productId) {
        let products = JSON.parse(localStorageData.getProducts());

        if ('undefined' === typeof products[productId]) {
            products[productId] = 1;
        } else {
            products[productId]++;
        }

        localStorage.setItem('products', JSON.stringify(products));
    },

    /**
     * Returns the total value of all products stored in the localStorage
     *
     * @returns {number}
     */
    getProductsCount: function () {
        let products = JSON.parse(localStorageData.getProducts());
        let result = 0;

        for (let i in products) {
            result += products[i];
        }

        return result;
    }
}

module.exports = localStorageData;
