import navbar from './inc/navbar';
import get from './inc/fetch';
import localData from './inc/localStorageData';
import toast from './inc/toast';

let app = {
    init: function () {
        navbar.init();
        localData.init();

        // Updates the article counter when refreshing a page
        navbar.refreshShopCounter(localData.getProductsCount());

        // Get the id parameter stored in the url
        app.productId = unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape('id').replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));

        if (!app.productId) {
            app.displayNotFound();
        } else {
            app.fetchProduct()
                .then(function (response) {
                    app.displayProduct(response);
                })
        }
    },

    /**
     * Get products from the backend in json format
     *
     * @returns {Promise<any>}
     */
    fetchProduct: function () {
        return get('http://localhost:3000/api/cameras/'+app.productId)
            .then(response => response.json());
    },

    /**
     * Displays the product review retrieved earlier from the database on the product review page
     *
     * @param {Object} product
     */
    displayProduct: function(product) {
        let template = document.querySelector('#product-preview');
        let targetElement = document.querySelector('#product-preview-block');

        // Create a clone of the template and fill in all the information collected earlier
        let templateClone = document.importNode(template.content, true);

        // Product title
        templateClone.querySelector('.product-preview__title').textContent = product.name

        // Product image
        templateClone.querySelector('.product-preview__image img').src = product.imageUrl;

        // Product description
        templateClone.querySelector('.product-preview__text').textContent = product.description;

        // Product price
        templateClone.querySelector('.product-preview__price').textContent = product.price + '€';

        // Shop button
        templateClone.querySelector('.shop-button').addEventListener('click', app.handleShopButtonClick);

        targetElement.appendChild(templateClone);
    },

    /**
     * Displays a message if the requested item does not exist
     */
    displayNotFound: function () {
        let templateClone = document.importNode(document.querySelector('#product-not-found').content, true)
        templateClone.querySelector('.product-preview__title').textContent = 'Article inexistant !';

        let targetElement = document.querySelector('#product-preview-block');
        targetElement.appendChild(templateClone);
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
