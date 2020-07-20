/**
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
    return window.fetch(url, $header);
}

module.exports = get;
