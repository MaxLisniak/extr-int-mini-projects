const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html');
});

io.on('connection', (socket) => {
  console.log('a client connected');
  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
  socket.on('move', (coordinates) => {
    io.emit('move', coordinates);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});