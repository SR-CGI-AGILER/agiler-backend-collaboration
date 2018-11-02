var socketIns;

function instantiateSocket(io){
    io.on('connection', function(socket){
        socketIns =  socket;

        // socket.on('message', function(msg){
        //     console.log('message:'+JSON.stringify(msg));
        
        
        // io.emit('message', msg);
        // })
    })
}

function joinroom(roomname){    
    socketIns.join(roomname);
}

module.exports = { instantiateSocket, joinroom }
