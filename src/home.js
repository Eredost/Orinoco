import navbar from './inc/navbar';
import get from './inc/fetch';

let app = {
    init: function () {
        // Handle events related to the navigation bar
        navbar.init();

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
            // Preview button
            templateClone.querySelector('.preview-button').href = 'produit.html?id='+product._id;
            // Description paragraphs
            templateClone.querySelector('.product__name').textContent = product.name;
            templateClone.querySelector('.product__price').textContent = product.price + '€';

            // Add the item's clone to the parent 'products'
            targetElement.appendChild(templateClone);
        }
    }
}

document.addEventListener('DOMContentLoaded', app.init);
