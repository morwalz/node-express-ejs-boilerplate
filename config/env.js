var util = require(__dirname + '/../libs/util.js');
module.exports = function (express, app) {

    // Common configuration
    app.configure(function () {
        // Load controllers
        app.use(express.static(__dirname + '/../public'));
    });

    // Development specific configuration
    app.configure('development', function () {
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    // Production specific configuration
    app.configure('production', function () {
        app.use(express.errorHandler());
    });

};
