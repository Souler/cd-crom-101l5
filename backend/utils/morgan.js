/**
    Returns the response code escaped by a ansii color:
        * 2XX: Green
        * 3XX: Cyan
        * 4XX: Yellow
        * 5XX: Red
*/
exports.responseColor = function(req, res) {
    var status = res.statusCode
    var color = 32;

    if (status >= 500)
        color = 31
    else if (status >= 400)
        color = 33
    else if (status >= 300)
        color = 36;

    return '\x1b[' + color + 'm' + status + '\x1b[0m';;
    
};