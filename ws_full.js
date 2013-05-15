"use strict"

process.title ='node-chat';

var webSocketsServerPort = 1337;

var webSocketServer = require('websocket').server;
var http = require('http');

var history = [];
var clients = [];

function htmlEntities(str)
{
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
		              .replace(/>/g, '&gt;').replace(/"/g,  '&quote;');

}

var colors =['red','green','blue', 'magenta', 'purple', 'plum','orange'];
colors.sort(function(a,b){return Math.random() > 0.5; });

//HTTP server
var server = http.createServer(function(request, response){
});

server.listen(webSocketsServerPort, function(){
	console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

//webSocketServer
var wsServer = new webSocketServer({
	httpServer: server

});
//This function gets called when someone tries to connect to the web socket server
wsServer.on('request', function(request){
	console.log((Date()) + ' Connection from origin ' + request.origin + '.');

	var connection = request.accept(null, request.origin);

	var index = clients.push(connection) - 1;
	var userName = false;
	var userColor = false;

	console.log((new Date())+ ' Connection accepted.');

	if(history.length > 0){
		connection.sendUTF(JSON.stringsify({type: 'history', data: history} ));
	}

	connection.on('message', function(message){
		if(message.type === 'utf8'){
			if(userName === false){


			}

		}






	});



});