require("./startup.js");
var http = require('http');

var sitename = process.env.WEBSITE_SITE_NAME;
var serverURL = process.env.APP_SERVER_URL || "UNKNOWN";
var serverToken = process.env.APP_SERVER_TOKEN || "UNKNOWN";

var server = http.createServer(function(request, response) {
    response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    response.end("Hello Wonderful People!\nThe serverURL is " + serverURL + "\nThe serverToken is " + serverToken + "\n");
});

var port = process.env.PORT || 1337;
// console.error("Server running at http://%s:%d", sitename, port);

server.listen(port);

