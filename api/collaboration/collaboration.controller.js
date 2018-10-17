const collaborationDao = require('../../dao/collaboration/collaboration.dao')
const socketconn = require('../../socket-connection/index');
function findRoom(req, res) {
    let data = {
        roomName: req.params.roomname,
        members: req.body.members
    }
    collaborationDao.findRoom(data).then(data => {
        // socketconn.instantiateSocket(io);
        socketconn.joinroom(data.roomName);
    //   jointheRoomMethod(data);
        res.status('201').send({
            data: req.body
        })

    })
    if(data===null || data === []){
        socketconn.joinroom(data.roomName)
        collaborationDao.createRoom(data).then(data => {
            
        })
        // collaborationDao.createRoom(data)
        // SocketIO
        res.send({"Here":" "});
    }
}



module.exports = { findRoom }