var socketIns;

function instantiateSocket(io){
    io.on('connection', function(socket){
        console.log(socket.id);
        socketIns =  socket;


    })
}

function joinroom(roomname){
    console.log(roomname);
    socketIns.join((roomname));
    console.log(socketIns.adapter.rooms);
}

module.exports = { instantiateSocket, joinroom }