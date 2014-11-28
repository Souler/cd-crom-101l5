// external requires
var async = require('async');

// exports
exports.getInfo = function (req, res) {
    // filter package info
    var result = {
        code: 0,
        name: appInfo.name,
        version: appInfo.version
    }

    res.json(result);
}

exports.render404 = function(req, res) {
    res.status(404);
    res.json({code: 1});
}
