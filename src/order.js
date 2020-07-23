import navbar from './inc/navbar';
import localData from './inc/localStorageData';

let app = {
    init: function () {
        navbar.init();
        localData.init();

        // Updates the article counter when refreshing a page
        navbar.refreshShopCounter(localData.getProductsCount());


    },
}

document.addEventListener('DOMContentLoaded', app.init);
