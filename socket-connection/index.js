var socketIns;

function instantiateSocket(io){
    io.on('connection', function(socket){
        socketIns =  socket;
})
}

function joinroom(roomname){    
    socketIns.join(roomname);
}

module.exports = { instantiateSocket, joinroom }
