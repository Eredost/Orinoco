/**
 * Function allowing to make AJAX calls with the "GET" method and return in JSON format
 *
 * @param {string} url
 *
 * @returns {Promise<Response>}
 */
function get (url) {
    $header = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return window.fetch(url, $header)
        .catch(function (error) {
            window.alert('AJAX request failed, please try again later');
        });
}

module.exports = get;
