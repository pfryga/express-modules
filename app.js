var express = require('express');
var app = express();

var port = 8080;

app.listen(port, function () {
    console.log('server started on port ' + port);
});
