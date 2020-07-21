/**
 * Object used to display confirmation messages on the screen for a few seconds
 */
let toast = {
    /**
     * Displays a personalized message on the screen
     *
     * @param {string} message
     */
    showMessage: function (message) {
        let toastElement = document.querySelector('#toast');
        toastElement.textContent = message;
        toastElement.classList.add('show');

        setTimeout(function () {
            toastElement.classList.remove('show');
        }, 2800)
    }
}

module.exports = toast;
