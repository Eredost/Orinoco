// Object allowing navigation support on a mobile device
let navbar = {
    init: function () {
        let navbarToggleButtonElement = document.querySelector('#navbar-toggle');

        navbarToggleButtonElement.addEventListener('click', navbar.onNavbarToggleClick);
    },

    // Adds 'visible' class, which lets you expand the navigation menu on a mobile device
    onNavbarToggleClick: function () {
        let navbarMobileTargetElement = document.querySelector('#navbar-mobile');
        navbarMobileTargetElement.classList.toggle('visible');
    }
}

module.exports = navbar;
