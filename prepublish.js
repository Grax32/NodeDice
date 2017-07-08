
var fs = require('fs');

var config = "var buildConfig = " + JSON.stringify(process.env);

fs.writeFile("buildConfig.js",config,function(){});

