// const collaborationDao = require('../../dao/collaboration/collaboration.dao')
const jwt = require('jsonwebtoken');
const parser = require('cookie-parser')
var socketIns;
var ioInst;

function instantiateSocket(io) {
    ioInst = io;

    io.on('connection', function (socket) {
        // console.log(socket.handshake.headers.cookie,"id.......")
        // let token = socket.handshake.headers.cookie
        // let decoded = jwt.decode(token);
        // console.log(decoded,"decoded")
        // TO DO: write one databse call soo that u get all the rooms of a perticular user and join his socket id to that room

        socketIns = socket;
        // console.log(socketIns.id,"This ID got connected now");
        socket.on('disconnect', (r) => {
            console.log(socket.id, "this got diconnected")
        })
    })
}

function joinroom(roomname) {
    console.log(socketIns.id, "This is the ID which gets joined to the room")
    socketIns.join(roomname);
    console.log(socketIns.adapter.rooms, "this is the status of the rooms");
    //  console.log(ioInst.sockets.clients(), "this is the number of the sockets connected to the  server")
}

function sendMessageToRoom(message) {
    // console.log(ioInst, "this is io object")

    ioInst.in(message.roomname).emit('message', message)
}

module.exports = {
    instantiateSocket,
    joinroom,
    sendMessageToRoom
}