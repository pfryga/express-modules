var express = require('express');
var exModule = require('./models/module');
var secExModule = require('./models/module-sec');
var app = express();

var port = 8080;
var instanceModule = new exModule();
var instanceSecModule = new secExModule()

instanceModule.init();
instanceSecModule.init();

app.listen(port, function () {
    console.log('server started on port ' + port);
});
