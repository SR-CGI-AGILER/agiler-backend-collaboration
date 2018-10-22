const collaborationDao = require ('../../dao/collaboration/collaboration.dao')
const socketConnection =  require('../../socket-connection/index')


function allMessages(req,res)  {
    let queryParams = {
        roomName: req.params.room,
        limit: parseInt(req.query.limit) || 10,
        page: parseInt(req.query.page) || 0
    }

    collaborationDao.getAllMessages(queryParams).then(doc => {
        
        res.send({
            length: doc.length,            
            payload: {
                data: doc
            }
        })
    })
}

function findRoom(req, res) {
    let data = {
        roomName : req.params.roomname,
        members : req.body.members
    }

    collaborationDao.findRoom(data).then(data => {
        socketConnection.joinRoom(data.roomName);
        res.status('201').send({
            data: req.body
        })
    })

    if(data === null || data === []){
        socketConnection.joinRoom(data.roomName)
        collaborationDao.createRoom(data).then(data => {
            
        })

        res.send({"Here":""});
    }

}

module.exports = { findRoom, allMessages }


