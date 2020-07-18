import navbar from './inc/navbar'

let app = {
    init: function () {
        navbar.init();
    }
}

document.addEventListener('DOMContentLoaded', app.init);
