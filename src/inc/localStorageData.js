/**
 * Object used to add an abstraction layer to the localStorage and manages all the methods
 * related to products and orders
 */
let localStorageData = {
    init: function () {
        let storage = localStorageData.getProducts();
        // Add the products JSON string to the localStorage if it does not exist
        if (null === storage
            || '' === storage) {
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
        return localStorage.getItem('products') ?? '{}';
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
     * @returns {number} result
     */
    getProductsCount: function () {
        let products = JSON.parse(localStorageData.getProducts());
        let result = 0;

        for (let i in products) {
            result += parseInt(products[i], 10);
        }

        return result;
    },

    /**
     * Updates the item count for a product with the given id
     *
     * @param {string} productId
     * @param {number} count
     */
    updateProductCount: function (productId, count) {
        let products = JSON.parse(localStorageData.getProducts());
        products[productId] = count;
        localStorage.setItem('products', JSON.stringify(products));
    },

    /**
     * Deletes a product from localStorage using an identifier
     *
     * @param {string} productId
     */
    deleteProduct: function (productId) {
        let products = JSON.parse(localStorageData.getProducts());
        delete products[productId];
        localStorage.setItem('products', JSON.stringify(products));
    },

    /**
     * Checks if the product object in localStorage is empty
     *
     * @returns {boolean}
     */
    productsIsEmpty: function () {
        let products = JSON.parse(localStorageData.getProducts());
        let propertiesCounter = 0;

        // Adds the number of properties of the product object
        for (let product in products) {
            propertiesCounter++;
        }

        return propertiesCounter === 0;
    }
}

module.exports = localStorageData;
