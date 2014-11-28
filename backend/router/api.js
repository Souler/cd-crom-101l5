var api = require('../api');

module.exports = function(a) {
    a.get('/api/info', api.getInfo);

    // fallback
    a.get('/api/*', api.render404);
}