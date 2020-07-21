/**
 * Object allowing the handling of events related to the navigation bar
 */
let navbar = {
    init: function () {
        let navbarToggleButtonElement = document.querySelector('#navbar-toggle');

        navbarToggleButtonElement.addEventListener('click', navbar.onNavbarToggleClick);
    },

    /**
     * Toggles 'visible' class, which lets you expand the navigation menu on a mobile device
     */
    onNavbarToggleClick: function () {
        let navbarMobileTargetElement = document.querySelector('#navbar-mobile');
        navbarMobileTargetElement.classList.toggle('visible');
    },

    /**
     * Refreshes the cart counter elements on the site header
     *
     * @param {number} productsCount
     */
    refreshShopCounter: function (productsCount) {
        let shopCounterElements = document.querySelectorAll('.shop-icon__counter');

        for (let counter of shopCounterElements) {
            counter.textContent = productsCount;
        }
    }
}

module.exports = navbar;
