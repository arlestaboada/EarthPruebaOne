'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var ee = require('@google/earthengine');
var privateKey = require('./privatekey.json');
ee.data.authenticateViaPrivateKey(privateKey);
//ee.initialize();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
