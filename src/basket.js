import navbar from './inc/navbar';
import {get} from './inc/fetch';
import localData from './inc/localStorageData';
import {form} from './inc/form';

let app = {
    init: function () {
        navbar.init();
        localData.init();

        // Updates the article counter when refreshing a page
        navbar.refreshShopCounter(localData.getProductsCount());

        // Get an object containing all the products added to the cart
        let products = JSON.parse(localData.getProducts());
        // For each product, we display it on the page
        for (let product in products) {
            app.fetchProduct(product)
                .then(function (response) {
                    app.displayProduct(response, products[product]);
                });
        }

        // Retrieves the items from the product summary
        app.summarySubtotal = document.querySelector('.subtotal__price');
        app.summaryTotal = document.querySelector('.total__price');

        // Handle form validations
        form.init();
    },

    /**
     * Get products from the backend in json format
     *
     * @returns {Promise<any>}
     */
    fetchProduct: function (productId) {
        return get('http://localhost:3000/api/cameras/'+productId)
            .then(response => response.json());
    },

    /**
     * Displays the product lines in the cart table with the information retrieved earlier
     *
     * @param {Object} product
     * @param {number} count
     */
    displayProduct: function (product, count) {
        let template = document.querySelector('#product-basket__row');
        let targetElement = document.querySelector('#product-basket-body');

        // Create a clone of the template and fill in all the information collected earlier
        let templateClone = document.importNode(template.content, true);

        // Product id
        templateClone.querySelector('.product-basket__row').dataset.id = product._id;

        // Product name
        templateClone.querySelector('.product-basket__name').textContent = product.name;

        // Product price
        templateClone.querySelector('.product-basket__price').textContent = (product.price / 100) + '€';

        // Product quantity buttons and input
        let quantityInput = templateClone.querySelector('#quantity');

        quantityInput.addEventListener('change', app.handleQuantityChange);
        templateClone.querySelector('.product-basket__quantity .less').addEventListener('click', app.handleLessButtonClick);
        templateClone.querySelector('.product-basket__quantity .more').addEventListener('click', app.handleMoreButtonClick);
        quantityInput.value = count;

        // Product total price
        templateClone.querySelector('.product-basket__total').textContent = ((product.price / 100) * count) + '€';

        targetElement.appendChild(templateClone);

        // Update products summary
        app.updateSummary();
    },

    /**
     * Delete the product row in the cart table using the input field element
     *
     * @param {Object} inputElement
     */
    deleteProductRow: function (inputElement) {
        let productRow = inputElement.closest('.product-basket__row');

        // Deletes the product in the localStorage associated with the identifier
        localData.deleteProduct(productRow.dataset.id);
        // Removes the entire row of the product from the table
        productRow.remove();
        // Refreshes the item counters on the navbar and the title
        navbar.refreshShopCounter(localData.getProductsCount());
        // Updates the product summary
        app.updateSummary();
    },

    /**
     * Updates the product line in the cart table
     *
     * @param {Object} inputElement
     */
    updateProductRow: function (inputElement) {
        let productRow = inputElement.closest('.product-basket__row');
        let productPrice = productRow.querySelector('.product-basket__price');

        // Updates the number of items in the localStorage
        productRow.querySelector('.product-basket__total').textContent = (productPrice.textContent.replace('€', '') * inputElement.value) + '€';
        localData.updateProductCount(productRow.dataset.id, inputElement.value);

        // Refreshes the item counters on the navbar and the title
        navbar.refreshShopCounter(localData.getProductsCount());
        // Updates the product summary
        app.updateSummary()
    },

    /**
     * Updates the summary of products in the cart
     */
    updateSummary: function () {
        let totals = document.getElementsByClassName('product-basket__total');
        let productsPrice = 0;

        // Add all the total prices of the products
        for (let total of totals) {
            productsPrice += parseInt(total.textContent.replace('€', ''), 10);
        }

        // Updates the subtotal and total in the summary
        app.summarySubtotal.textContent = productsPrice + '€';
        app.summaryTotal.textContent = productsPrice + '€';
    },

    /**
     * Handles the quantity change in the input field of each of the products present in the cart table
     *
     * @param {Event} event
     */
    handleQuantityChange: function (event) {
        let inputElement = event.target;
        if (0 >= inputElement.value) {
            app.deleteProductRow(inputElement);
        } else {
            app.updateProductRow(inputElement);
        }
    },

    /**
     * Subtracts the quantity from the input element and triggers the associated 'change' event
     *
     * @param {MouseEvent} event
     */
    handleLessButtonClick: function (event) {
        let quantityInput = event.target.parentNode.querySelector('#quantity');
        quantityInput.value--;

        // Triggers the 'change' event linked to the input element
        let changeEvent = new Event('change');
        quantityInput.dispatchEvent(changeEvent);
    },

    /**
     * Adds the quantity from the input element and triggers the associated 'change' event
     *
     * @param {MouseEvent} event
     */
    handleMoreButtonClick: function (event) {
        let quantityInput = event.target.parentNode.querySelector('#quantity');
        quantityInput.value++;

        // Triggers the 'change' event linked to the input element
        let changeEvent = new Event('change');
        quantityInput.dispatchEvent(changeEvent);
    }
};

document.addEventListener('DOMContentLoaded', app.init);
