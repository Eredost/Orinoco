import navbar from './inc/navbar';
import {get} from './inc/fetch';
import localData from './inc/localStorageData';
import toast from './inc/toast';

let app = {
    init: function () {
        navbar.init();
        localData.init();

        // Updates the article counter when refreshing a page
        navbar.refreshShopCounter(localData.getProductsCount());

        // Retrieves the products from the database and calls the associated method to display them
        app.fetchProducts()
            .then(function (response) {
                app.displayProducts(response);
            });
    },

    /**
     * Get products from the backend in json format
     *
     * @returns {Promise<any>}
     */
    fetchProducts: function () {
        return get('http://localhost:3000/api/cameras')
            .then(response => response.json());
    },

    /**
     * Displays all products retrieved earlier from the database on the home page
     *
     * @param {Object[]} products
     */
    displayProducts: function (products) {
        let template = document.querySelector('#product-card');
        let targetElement = document.querySelector('.products');

        for (let product of products) {
            // Create a clone of the template and fill in all the information collected earlier
            let templateClone = document.importNode(template.content, true);

            // Image div parent
            templateClone.querySelector('.product__image').href ='produit.html?id='+product._id;

            // Image tag
            templateClone.querySelector('img').src = product.imageUrl;
            templateClone.querySelector('img').alt = product.name;

            // Shop button
            templateClone.querySelector('.shop-button').dataset.id = product._id;
            templateClone.querySelector('.shop-button').addEventListener('click', app.handleShopButtonClick);

            // Preview button
            templateClone.querySelector('.preview-button').href = 'produit.html?id='+product._id;

            // Description paragraphs
            templateClone.querySelector('.product__name').textContent = product.name;
            templateClone.querySelector('.product__price').textContent = product.price + '€';

            // Add the item's clone to the parent 'products'
            targetElement.appendChild(templateClone);
        }
    },

    /**
     * Manage the addition of a product when clicking on the shopping cart button
     *
     * @param {MouseEvent} event
     */
    handleShopButtonClick: function (event) {
        // Remove default behavior of link
        event.preventDefault();

        // Add product to localStorage
        localData.addProduct(this.dataset.id);

        // Show confirmation message
        toast.showMessage('Article ajouté avec succès !')

        // Refreshes the cart counters
        navbar.refreshShopCounter(localData.getProductsCount());
    }
}

document.addEventListener('DOMContentLoaded', app.init);
