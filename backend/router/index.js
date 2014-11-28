// local requires
var api = require('../api');
var site = require('../controllers');
// routers
var apiRouter = require('./api.js');

module.exports = function(a) {
    apiRouter(a);

    a.get('/', site.home);
    a.get('*', site.home);
}