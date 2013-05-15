var net = require('net');


var server = net.createServer(function(socket){
	socket.write("Echo server\r\n");
	socket.pipe(socket);

});

server.listen(7000, "172.16.0.108");

console.log("TCP server listening on port 7000 on localhost");