var exports;

exports = module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index', {
            title: "EJS example",
            header: "Some users"
        });
    });
};