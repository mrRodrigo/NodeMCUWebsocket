const express = require('express');

const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

const rasp = [];

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

app.get("/:func/:method", (req, res) => { 
  const { func, method } = req.params;
  
  io.emit(func, {method});
  
  return res.send(`function called: ${func} emited with method ${method}`) 
});

io.on('connection', (socket) => {

  socket.on('connectionRequest', data => {
    socket.emit('accepted');
  });
  
});

