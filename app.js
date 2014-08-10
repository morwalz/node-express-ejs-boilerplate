var express = require('express'),
    http = require('http'),
    fs=require('fs'),
    app = express(),
    opts = require(__dirname + '/config/opts.js');

// Load express configuration
require(__dirname + '/config/env.js')(express, app);

// Load controllers
var controller_files, controller_loc;
controller_loc = __dirname + '/controllers';

controller_files = fs.readdirSync(controller_loc);

controller_files.forEach(function(file) {
    return (require(controller_loc + '/' + file))(app);
});

app.engine('.html', require('ejs').__express);

app.set('views', __dirname + '/views');

app.set('view engine', 'html');

// Start the server
http.createServer(app).listen(opts.port, function () {
    console.log("Express server listening on port %d in %s mode",
                opts.port, app.settings.env);
});
