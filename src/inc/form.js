import {post} from './fetch';
import localData from './localStorageData';

/**
 * Object allowing the validation of the input fields of the order form
 */
export let form = {
    init: function () {
        // Retrieves the elements to validate from the form
        form.formElement = document.querySelector('.order > form');
        form.formElement.addEventListener('submit', form.handleFormSubmit);

        // Firstname field
        form.formElement.querySelector('#firstname').addEventListener('change', form.firstNameIsValid);

        // Lastname field
        form.formElement.querySelector('#lastname').addEventListener('change', form.lastNameIsValid);

        // Address field
        form.formElement.querySelector('#address').addEventListener('change', form.addressIsValid);

        // City field
        form.formElement.querySelector('#city').addEventListener('change', form.cityIsValid);

        // Email field
        form.formElement.querySelector('#email').addEventListener('change', form.emailIsValid);
    },

    /**
     * Checks if the first name input field is valid
     *
     * @returns {boolean}
     */
    firstNameIsValid: function () {
        let input = form.formElement.querySelector('#firstname');
        let value = input.value;

        // Checks if the entered value is empty or measures less than 3 characters
        if ('' === value) {
            form.displayErrorMessage(input.id, 'Le prénom ne peut pas être vide');

            return false;
        } else if (3 > value.length) {
            form.displayErrorMessage(input.id, 'Le prénom doit contenir au minimum 3 caractères');

            return false;
        }
        form.displayErrorMessage(input.id, '');

        return true;
    },

    /**
     * Checks if the last name input field is valid
     *
     * @returns {boolean}
     */
    lastNameIsValid: function () {
        let input = form.formElement.querySelector('#lastname');
        let value = input.value;

        // Checks if the entered value is empty or measures less than 3 characters
        if ('' === value) {
            form.displayErrorMessage(input.id, 'Le nom ne peut pas être vide');

            return false;
        } else if (3 > value.length) {
            form.displayErrorMessage(input.id, 'Le nom doit contenir au minimum 3 caractères');

            return false;
        }
        form.displayErrorMessage(input.id, '');

        return true;
    },

    /**
     * Checks if the address input field is valid
     *
     * @returns {boolean}
     */
    addressIsValid: function() {
        let input = form.formElement.querySelector('#address');
        let value = input.value;

        // Checks if the entered value is empty or is not a valid address
        if ('' === value) {
            form.displayErrorMessage(input.id, 'L\'adresse ne peut pas être vide');

            return false;
        } else if (!value.match(/\d{1,3},?\s[a-z\s]{3,110}/i)) {
            form.displayErrorMessage(input.id, 'L\'adresse n\'est pas valide');

            return false;
        }
        form.displayErrorMessage(input.id, '');

        return true;
    },

    /**
     * Checks if the city input field is valid
     *
     * @returns {boolean}
     */
    cityIsValid: function () {
        let input = form.formElement.querySelector('#city');
        let value = input.value;

        // Checks if the entered value is empty
        if ('' === value) {
            form.displayErrorMessage(input.id, 'La ville ne peut pas être vide');

            return false;
        }
        form.displayErrorMessage(input.id, '');

        return true;
    },

    /**
     * Checks if the city input field is valid
     *
     * @returns {boolean}
     */
    emailIsValid: function () {
        let input = form.formElement.querySelector('#email');
        let value = input.value;

        // Checks if the entered value is empty or is not a valid email
        if ('' === value) {
            form.displayErrorMessage(input.id, 'L\'email ne peut pas être vide');

            return false;
        } else if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            form.displayErrorMessage(input.id, 'L\'email n\'est pas valide');

            return false;
        }
        form.displayErrorMessage(input.id, '');

        return true;
    },

    /**
     * Supports form submission, checks validation of all fields and retrieves the contact object
     *
     * @param {Event} event
     */
    handleFormSubmit: function (event) {
        if (!form.formInputsAreValid()) {

            return;
        }
        // Removes the default behavior from the form
        event.preventDefault();

        // Retrieve the products and place their identifier in a table
        let productsObject = JSON.parse(localData.getProducts());
        let products = [];
        for (let product in productsObject) {
            products.push(product);
        }

        // Create a contact object with all the values ​​of the forms
        let contact = {
            'firstName': form.formElement.querySelector('#firstname').value,
            'lastName': form.formElement.querySelector('#lastname').value,
            'address': form.formElement.querySelector('#address').value,
            'city': form.formElement.querySelector('#city').value,
            'email': form.formElement.querySelector('#email').value
        }

        // Send the products table and the contact object to finalize the order
        post('http://localhost:3000/api/cameras/order', JSON.stringify({contact, products}))
            .then(response => response.json())
            .then(function (response) {
                // Adds the order object retrieved in the request
                localStorage.setItem('order', JSON.stringify(response));
                // Remove products from localstorage
                localStorage.removeItem('products');
                //Redirects to the order confirmation page
                window.location.href = 'commande.html';
            })
    },

    /**
     * Checks all input fields on the form by calling their respective validator
     *
     * @returns {boolean}
     */
    formInputsAreValid: function () {
        return form.firstNameIsValid()
            && form.lastNameIsValid()
            && form.addressIsValid()
            && form.cityIsValid()
            && form.emailIsValid();
    },

    /**
     * Displays an error message in the container of the associated input
     *
     * @param {string} inputId
     * @param {string} message
     */
    displayErrorMessage: function (inputId, message) {
        let errorDiv = form.formElement.querySelector('#'+inputId+' ~ .errors');
        errorDiv.textContent = message;
    }
};
