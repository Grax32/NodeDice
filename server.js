var http = require('http');

var server = http.createServer(function(request, response) {
    response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
	
	response.write("Greetings.\n");
	response.write(process.env.WEBSITE_SITE_NAME+"\n");
	response.write("Greetings.\n);
    response.end("Hello Wonderful People!\n");
});

var port = process.env.PORT || 1337;
// console.error("Server running at http://%s:%d", sitename, port);

server.listen(port);

var sitename = process.env.WEBSITE_SITE_NAME;


