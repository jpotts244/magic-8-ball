var net = require('net');
var fs = require('fs');
var port = 2000;


var server = net.createServer(function (connection){
	connection.on('connect', function(arg){
		console.log(arg);
		connection.write("Welcome to the Magic 8 Ball. Care to ask a question?");

	})

	connection.on('data', function (data) {
		var repliesString = fs.readFileSync("./magic.json", "utf8");
		var replies = JSON.parse(repliesString);
		// var userInput = data.toString().trim().split(" ");
		
		var userReply = replies[Math.floor(Math.random()* replies.length)]

		connection.write(userReply.reply);
	})

	})

server.listen(port, function (){
	console.log("Listening for the cosmos");
})