!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}({0:function(t,e){var r={init:function(){null===r.getProducts()&&localStorage.setItem("products",JSON.stringify({}))},getProducts:function(){var t;return null!==(t=localStorage.getItem("products"))&&void 0!==t?t:"{}"},addProduct:function(t){var e=JSON.parse(r.getProducts());void 0===e[t]?e[t]=1:e[t]++,localStorage.setItem("products",JSON.stringify(e))},getProductsCount:function(){var t=JSON.parse(r.getProducts()),e=0;for(var n in t)e+=parseInt(t[n],10);return e},updateProductCount:function(t,e){var n=JSON.parse(r.getProducts());n[t]=e,localStorage.setItem("products",JSON.stringify(n))},deleteProduct:function(t){var e=JSON.parse(r.getProducts());delete e[t],localStorage.setItem("products",JSON.stringify(e))}};t.exports=r},1:function(t,e){function r(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o={init:function(){document.querySelector("#navbar-toggle").addEventListener("click",o.onNavbarToggleClick)},onNavbarToggleClick:function(){document.querySelector("#navbar-mobile").classList.toggle("visible")},refreshShopCounter:function(t){var e,n=r(document.querySelectorAll(".shop-icon__counter"));try{for(n.s();!(e=n.n()).done;){e.value.textContent=t}}catch(t){n.e(t)}finally{n.f()}}};t.exports=o},8:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),i=r(0),a=r.n(i);function u(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l={init:function(){o.a.init(),a.a.init(),o.a.refreshShopCounter(a.a.getProductsCount()),localStorage.getItem("order")?l.displayOrderConfirmation():window.location.href="index.html"},displayOrderConfirmation:function(){var t=JSON.parse(localStorage.getItem("order")),e=document.querySelector("#confirmation"),r=document.querySelector("#confirmation-block"),n=document.importNode(e.content,!0);n.querySelector(".confirmation__order-number").textContent=t.orderId;var o,i=0,a=u(t.products);try{for(a.s();!(o=a.n()).done;){var c=o.value,l=document.createElement("div"),f=document.createElement("p"),d=document.createElement("span");f.textContent=c.name+"€",d.textContent=c.price+"€",i+=parseInt(c.price,10),l.appendChild(f),l.appendChild(d),n.querySelector(".confirmation__articles").appendChild(l)}}catch(t){a.e(t)}finally{a.f()}var s=document.createElement("div"),p=document.createElement("p"),m=document.createElement("span");p.textContent="Total",m.textContent=i+"€",s.appendChild(p),s.appendChild(m),n.querySelector(".confirmation__articles").appendChild(s),r.appendChild(n),localStorage.removeItem("order")}};document.addEventListener("DOMContentLoaded",l.init)}});