/**
 * Function allowing to make AJAX calls with the "GET" method and return in JSON format
 *
 * @param {string} url
 *
 * @returns {Promise<Response>}
 */
export function get (url) {
    let header = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return window.fetch(url, header)
        .catch(function (error) {
            window.alert('AJAX request failed, please try again later');
        });
}

/**
 * Function allowing to make AJAX calls with the "POST" method and return in JSON format
 *
 * @param {string} url
 * @param {string} content
 *
 * @returns {Promise<Response>}
 */
export function post (url, content) {
    let header = {
        method: 'POST',
        body: content,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return window.fetch(url, header)
        .catch(function (error) {
            window.alert('AJAX request failed, please try again later');
        });
}
