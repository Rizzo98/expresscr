var app = require('../app');
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

io.on('connection', function(socket){
    console.log('a user connected');

});

module.exports = server;