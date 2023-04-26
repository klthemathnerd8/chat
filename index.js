const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('User connected');

  socket.on('disconnect', function() {
    console.log('User disconnected');
  });

  socket.on('chat message', function(msg) {
    console.log('Message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(3000, function() {
  console.log('Listening on *:3000');
});
