// Create web server
// 2016-05-01    PV

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    if (page == '/')
        page = '/comments.html';
    fs.readFile(__dirname + page, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(8080);
console.log('Server running at http://localhost:8080/');