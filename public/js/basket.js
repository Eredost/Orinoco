!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){var r={init:function(){null===r.getProducts()&&localStorage.setItem("products",JSON.stringify({}))},getProducts:function(){var e;return null!==(e=localStorage.getItem("products"))&&void 0!==e?e:"{}"},addProduct:function(e){var t=JSON.parse(r.getProducts());void 0===t[e]?t[e]=1:t[e]++,localStorage.setItem("products",JSON.stringify(t))},getProductsCount:function(){var e=JSON.parse(r.getProducts()),t=0;for(var n in e)t+=parseInt(e[n],10);return t},updateProductCount:function(e,t){var n=JSON.parse(r.getProducts());n[e]=t,localStorage.setItem("products",JSON.stringify(n))},deleteProduct:function(e){var t=JSON.parse(r.getProducts());delete t[e],localStorage.setItem("products",JSON.stringify(t))}};e.exports=r},function(e,t){function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw u}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o={init:function(){document.querySelector("#navbar-toggle").addEventListener("click",o.onNavbarToggleClick)},onNavbarToggleClick:function(){document.querySelector("#navbar-mobile").classList.toggle("visible")},refreshShopCounter:function(e){var t,n=r(document.querySelectorAll(".shop-icon__counter"));try{for(n.s();!(t=n.n()).done;){t.value.textContent=e}}catch(e){n.e(e)}finally{n.f()}}};e.exports=o},function(e,t,r){"use strict";function n(e){return window.fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).catch((function(e){window.alert("AJAX request failed, please try again later")}))}function o(e,t){var r={method:"POST",body:t,headers:{"Content-Type":"application/json"}};return window.fetch(e,r).catch((function(e){window.alert("AJAX request failed, please try again later")}))}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}))},,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(2),u=r(0),i=r.n(u),l={init:function(){l.formElement=document.querySelector(".order > form"),l.formElement.addEventListener("submit",l.handleFormSubmit),l.formElement.querySelector("#firstname").addEventListener("change",l.firstNameIsValid),l.formElement.querySelector("#lastname").addEventListener("change",l.lastNameIsValid),l.formElement.querySelector("#address").addEventListener("change",l.addressIsValid),l.formElement.querySelector("#city").addEventListener("change",l.cityIsValid),l.formElement.querySelector("#email").addEventListener("change",l.emailIsValid)},firstNameIsValid:function(){var e=l.formElement.querySelector("#firstname"),t=e.value;return""===t?(l.displayErrorMessage(e.id,"Le prénom ne peut pas être vide"),!1):3>t.length?(l.displayErrorMessage(e.id,"Le prénom doit contenir au minimum 3 caractères"),!1):(l.displayErrorMessage(e.id,""),!0)},lastNameIsValid:function(){var e=l.formElement.querySelector("#lastname"),t=e.value;return""===t?(l.displayErrorMessage(e.id,"Le nom ne peut pas être vide"),!1):3>t.length?(l.displayErrorMessage(e.id,"Le nom doit contenir au minimum 3 caractères"),!1):(l.displayErrorMessage(e.id,""),!0)},addressIsValid:function(){var e=l.formElement.querySelector("#address"),t=e.value;return""===t?(l.displayErrorMessage(e.id,"L'adresse ne peut pas être vide"),!1):t.match(/\d{1,3},?\s[a-z\s]{3,110}/i)?(l.displayErrorMessage(e.id,""),!0):(l.displayErrorMessage(e.id,"L'adresse n'est pas valide"),!1)},cityIsValid:function(){var e=l.formElement.querySelector("#city");return""===e.value?(l.displayErrorMessage(e.id,"La ville ne peut pas être vide"),!1):(l.displayErrorMessage(e.id,""),!0)},emailIsValid:function(){var e=l.formElement.querySelector("#email"),t=e.value;return""===t?(l.displayErrorMessage(e.id,"L'email ne peut pas être vide"),!1):t.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?(l.displayErrorMessage(e.id,""),!0):(l.displayErrorMessage(e.id,"L'email n'est pas valide"),!1)},handleFormSubmit:function(e){if(l.formInputsAreValid()){e.preventDefault();var t=JSON.parse(i.a.getProducts()),r=[];for(var n in t)r.push(n);var o={firstName:l.formElement.querySelector("#firstname").value,lastName:l.formElement.querySelector("#lastname").value,address:l.formElement.querySelector("#address").value,city:l.formElement.querySelector("#city").value,email:l.formElement.querySelector("#email").value};Object(a.b)("http://localhost:3000/api/cameras/order",JSON.stringify({contact:o,products:r})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("order",JSON.stringify(e)),localStorage.removeItem("products"),window.location.href="commande.html"}))}},formInputsAreValid:function(){return l.firstNameIsValid()&&l.lastNameIsValid()&&l.addressIsValid()&&l.cityIsValid()&&l.emailIsValid()},displayErrorMessage:function(e,t){l.formElement.querySelector("#"+e+" ~ .errors").textContent=t}};function c(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){i=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d={init:function(){o.a.init(),i.a.init(),o.a.refreshShopCounter(i.a.getProductsCount());var e=JSON.parse(i.a.getProducts()),t=function(t){d.fetchProduct(t).then((function(r){d.displayProduct(r,e[t])}))};for(var r in e)t(r);d.summarySubtotal=document.querySelector(".subtotal__price"),d.summaryTotal=document.querySelector(".total__price"),l.init()},fetchProduct:function(e){return Object(a.a)("http://localhost:3000/api/cameras/"+e).then((function(e){return e.json()}))},displayProduct:function(e,t){var r=document.querySelector("#product-basket__row"),n=document.querySelector("#product-basket-body"),o=document.importNode(r.content,!0);o.querySelector(".product-basket__row").dataset.id=e._id,o.querySelector(".product-basket__name").textContent=e.name,o.querySelector(".product-basket__price").textContent=e.price+"€";var a=o.querySelector("#quantity");a.addEventListener("change",d.handleQuantityChange),o.querySelector(".product-basket__quantity .less").addEventListener("click",d.handleLessButtonClick),o.querySelector(".product-basket__quantity .more").addEventListener("click",d.handleMoreButtonClick),a.value=t,o.querySelector(".product-basket__total").textContent=e.price*t+"€",n.appendChild(o),d.updateSummary()},deleteProductRow:function(e){var t=e.closest(".product-basket__row");i.a.deleteProduct(t.dataset.id),t.remove(),o.a.refreshShopCounter(i.a.getProductsCount()),d.updateSummary()},updateProductRow:function(e){var t=e.closest(".product-basket__row"),r=t.querySelector(".product-basket__price");t.querySelector(".product-basket__total").textContent=r.textContent.replace("€","")*e.value+"€",i.a.updateProductCount(t.dataset.id,e.value),o.a.refreshShopCounter(i.a.getProductsCount()),d.updateSummary()},updateSummary:function(){var e,t=0,r=c(document.getElementsByClassName("product-basket__total"));try{for(r.s();!(e=r.n()).done;){var n=e.value;t+=parseInt(n.textContent.replace("€",""),10)}}catch(e){r.e(e)}finally{r.f()}d.summarySubtotal.textContent=t+"€",d.summaryTotal.textContent=t+"€"},handleQuantityChange:function(e){var t=e.target;0>=t.value?d.deleteProductRow(t):d.updateProductRow(t)},handleLessButtonClick:function(e){var t=e.target.parentNode.querySelector("#quantity");t.value--;var r=new Event("change");t.dispatchEvent(r)},handleMoreButtonClick:function(e){var t=e.target.parentNode.querySelector("#quantity");t.value++;var r=new Event("change");t.dispatchEvent(r)}};document.addEventListener("DOMContentLoaded",d.init)}]);