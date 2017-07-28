const express = require("express");
var socket = require("socket.io");
const app = express();
app.get('/admin',(req,res)=>{
	res.sendFile(__dirname+"/admin.html");
		});
app.get('/',(req,res)=>{
	res.sendFile(__dirname+"/index.html");
})
var lat ;
var long;
var server = app.listen(7678,()=>{
	console.log("server start");
})
var io = socket(server);
io.sockets.on('connection', function (socket) {
	socket.on('send', function (data) {
		lat = data.latitude;
		long =data.longitude
		console.log(lat,long);
	
		console.log(data.latitude,data.longitude);
		
	})
		
      io.sockets.emit('message', {"latitude":lat,"longitude":long});
		})
	
	