var http = require('http');

var server = http.createServer(function(request, response) {
    response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    response.setHeader('Transfer-Encoding', 'chunked');
	
	response.write("Greetings.");
	response.write(process.env.WEBSITE_SITE_NAME);
	response.write("Greetings.");
    response.end("Hello Wonderful People!");
});

var port = process.env.PORT || 1337;
// console.error("Server running at http://%s:%d", sitename, port);

server.listen(port);

var sitename = process.env.WEBSITE_SITE_NAME;


