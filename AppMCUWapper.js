const io = require('socket.io-client');
const turnOn = require('./turnOn');

var glitchSocket = io.connect('https://equal-capricious-meeting.glitch.me');

glitchSocket.emit("connectionRequest", "raspberry01");

glitchSocket.on('accepted', data => {
    console.log("connected", data); 
});


glitchSocket.on('turnOn', data => {
    const { method, ...params } = data;

    turnOn[method](params); 
});


