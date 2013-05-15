var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");

});
server.listen(1337, function(){});


wsServer = new WebSocketServer({
	httpServer: server
});

wsServer.on('request', function(request){
	var connection = request.accept(null, request.origin);

	//All Messages will be handled here
	connection.on('message', function(message){
		if(message.type === 'utf8'){
			//process socket message
		}
	});
	
	connection.on('close', function(connection){
		//close user connection
	});
});

console.log("TCP server listening on port 1337 on localhost");