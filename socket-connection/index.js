var socketIns;
var ioInst;

function instantiateSocket(io){
    ioInst = io;
    console.log()
    io.on('connection', function(socket){
        // console.log("fkjfhaofhij")
         console.log(socket.id);
        socketIns =  socket;
})
}

function joinroom(roomname){ 
    socketIns.join(roomname);
     console.log(socketIns.adapter.rooms);
}

function sendMessageToRoom(message) {
    // console.log(ioInst, "this is io object")

    ioInst.in(message.roomname).emit('message', message)
}

module.exports = { instantiateSocket, joinroom, sendMessageToRoom }
