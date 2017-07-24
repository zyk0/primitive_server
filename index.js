var http = require('http');
var url = require('url');
var fs = require('fs');

//а сколько модулей включено в node по дефолту?

var server = new http.Server;

server.listen(7080, '127.0.0.1'); // localhost

server.on('request', function (req, res) {
    var localhosturl = url.parse(req.url, true);

    fs.readFile(router(localhosturl.pathname) + '.html', function (err, data) {
        if (err) throw new Error(err);

        res.end(data);
    })

});

function router(path) {
    switch (path) {
        case '/':
        case '/home':
            return 'index';
        case '/about':
            return 'about';
        default: return 'error';
    }
}