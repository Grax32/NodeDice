var express = require('express');

var app = express.createServer();

app.get('/',function (request, response) {
	var content = "Hello Wonderful People!";
	response.charset = "utf-8";
	response.contentType("text/plain");
	response.send(content);
});

var port = process.env.PORT || 1337;
app.listen(port);

var sitename = process.env.WEBSITE_SITE_NAME;

console.log("Listening on %s port %s",sitename,port);

