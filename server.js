var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
	response.setHeader('Content-Type', 'html; charset=utf-8');
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf8', function(err, data) {
			response.write(data);
			response.end();
		});
	} else {
		fs.readFile('./blad404.jpg', function(err, data) {
			response.statusCode = 404;
			response.write(data);
			response.end();
		});
	}
});

server.listen(8080);