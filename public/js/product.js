!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){var r={init:function(){null===r.getProducts()&&localStorage.setItem("products",JSON.stringify({}))},getProducts:function(){var t;return null!==(t=localStorage.getItem("products"))&&void 0!==t?t:"{}"},addProduct:function(t){var e=JSON.parse(r.getProducts());void 0===e[t]?e[t]=1:e[t]++,localStorage.setItem("products",JSON.stringify(e))},getProductsCount:function(){var t=JSON.parse(r.getProducts()),e=0;for(var n in t)e+=parseInt(t[n],10);return e},updateProductCount:function(t,e){var n=JSON.parse(r.getProducts());n[t]=e,localStorage.setItem("products",JSON.stringify(n))},deleteProduct:function(t){var e=JSON.parse(r.getProducts());delete e[t],localStorage.setItem("products",JSON.stringify(e))}};t.exports=r},function(t,e){function r(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,u=function(){};return{s:u,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o={init:function(){document.querySelector("#navbar-toggle").addEventListener("click",o.onNavbarToggleClick)},onNavbarToggleClick:function(){document.querySelector("#navbar-mobile").classList.toggle("visible")},refreshShopCounter:function(t){var e,n=r(document.querySelectorAll(".shop-icon__counter"));try{for(n.s();!(e=n.n()).done;){e.value.textContent=t}}catch(t){n.e(t)}finally{n.f()}}};t.exports=o},function(t,e,r){"use strict";function n(t){return window.fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).catch((function(t){window.alert("AJAX request failed, please try again later")}))}function o(t,e){var r={method:"POST",body:e,headers:{"Content-Type":"application/json"}};return window.fetch(t,r).catch((function(t){window.alert("AJAX request failed, please try again later")}))}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}))},function(t,e){var r={showMessage:function(t){var e=document.querySelector("#toast");e.textContent=t,e.classList.add("show"),setTimeout((function(){e.classList.remove("show")}),2800)}};t.exports=r},,,,function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),u=r(2),i=r(0),c=r.n(i),a=r(3),l=r.n(a);function d(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,u=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw u}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var f={init:function(){o.a.init(),c.a.init(),o.a.refreshShopCounter(c.a.getProductsCount()),f.productId=unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape("id").replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1")),f.productId?f.fetchProduct().then((function(t){t.hasOwnProperty("_id")?f.displayProduct(t):f.displayNotFound()})):f.displayNotFound()},fetchProduct:function(){return Object(u.a)("http://localhost:3000/api/cameras/"+f.productId).then((function(t){return t.json()}))},displayProduct:function(t){var e=document.querySelector("#product-preview"),r=document.querySelector("#product-preview-block"),n=document.importNode(e.content,!0);n.querySelector(".product-preview__title").textContent=t.name,n.querySelector(".product-preview__image img").src=t.imageUrl,n.querySelector(".product-preview__text").textContent=t.description,n.querySelector(".shop-button").dataset.id=t._id,n.querySelector(".product-preview__price").textContent=t.price+"€",n.querySelector(".shop-button").addEventListener("click",f.handleShopButtonClick);var o,u=n.querySelector("#lenses"),i=d(t.lenses);try{for(i.s();!(o=i.n()).done;){var c=o.value,a=document.createElement("option");a.value=a.textContent=c,u.appendChild(a)}}catch(t){i.e(t)}finally{i.f()}r.appendChild(n)},displayNotFound:function(){var t=document.importNode(document.querySelector("#product-not-found").content,!0);t.querySelector(".product-preview__title").textContent="Article inexistant !",document.querySelector("#product-preview-block").appendChild(t)},handleShopButtonClick:function(t){t.preventDefault(),c.a.addProduct(this.dataset.id),l.a.showMessage("Article ajouté avec succès !"),o.a.refreshShopCounter(c.a.getProductsCount())}};document.addEventListener("DOMContentLoaded",f.init)}]);