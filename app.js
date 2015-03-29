var express = require('express');
var exModule = require('./models/module');
var app = express();

var port = 8080;
var instanceModule = new exModule();

instanceModule.init();

app.listen(port, function () {
    console.log('server started on port ' + port);
});
