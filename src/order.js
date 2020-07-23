import navbar from './inc/navbar';
import localData from './inc/localStorageData';

let app = {
    init: function () {
        navbar.init();
        localData.init();

        // Updates the article counter when refreshing a page
        navbar.refreshShopCounter(localData.getProductsCount());

        // Redirects to the home page if the order object does not exist
        if (!localStorage.getItem('order')) {
            window.location.href = 'index.html';
        } else {
            app.displayOrderConfirmation();
        }
    },

    /**
     * Displays the order confirmation with the 'order' object retrieved from the order form
     */
    displayOrderConfirmation: function () {
        // Get the 'order' object from localStorage
        let order = JSON.parse(localStorage.getItem('order'));

        let template = document.querySelector('#confirmation');
        let targetElement = document.querySelector('#confirmation-block');

        // Create a clone of the template and fill in all the information collected earlier
        let templateClone = document.importNode(template.content, true);

        // Order number
        templateClone.querySelector('.confirmation__order-number').textContent = order.orderId;

        // Iterates over all products to be able to display them and calculate the order total
        let total = 0;
        for (let product of order.products) {
            let divElement = document.createElement('div');
            let nameElement = document.createElement('p');
            let priceElement = document.createElement('span');

            nameElement.textContent = product.name + '€';
            priceElement.textContent = product.price + '€';
            total += parseInt(product.price, 10);

            divElement.appendChild(nameElement);
            divElement.appendChild(priceElement);
            templateClone.querySelector('.confirmation__articles').appendChild(divElement);
        }

        // Product total
        let divElement = document.createElement('div');
        let nameElement = document.createElement('p');
        let priceElement = document.createElement('span');

        nameElement.textContent = 'Total';
        priceElement.textContent = total + '€';

        divElement.appendChild(nameElement);
        divElement.appendChild(priceElement);
        templateClone.querySelector('.confirmation__articles').appendChild(divElement);

        targetElement.appendChild(templateClone);

        // Remove the 'order' object from the localStorage
        localStorage.removeItem('order');
    }
}

document.addEventListener('DOMContentLoaded', app.init);
