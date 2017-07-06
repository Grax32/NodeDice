var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Wonderful People!");

});

var port = 80;
server.listen({ port: port });

var sitename = process.env.WEBSITE_SITE_NAME;

console.log("Server running at http://%s:%d", sitename, port);

