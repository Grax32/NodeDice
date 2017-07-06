var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Greetings.");
    response.end("Hello Wonderful People!");
});

var port = process.env.PORT || 1337;
// console.error("Server running at http://%s:%d", sitename, port);

server.listen(port);

var sitename = process.env.WEBSITE_SITE_NAME;


