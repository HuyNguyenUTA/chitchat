const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.set('view engine', 'html')

app.get('/Users/huynguyen/MyWork/Coding/chitchat/front-end/public/index', (req, res) => {
  res.render('index');
});

server.listen(4000, () => {
  console.log("Server running...");
});

io.on("connection", (socket) => {
  console.log("User connected: " + socket.id);
  socket.on("message", (data) => {
    console.log(data)
  });
});