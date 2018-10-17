const collaborationDao = require('../../dao/collaboration/collaboration.dao')
const socketconn = require('../../socket-connection/index');


function findRoomResponse(req, res) {
    let roomData = {
        roomName: req.params.roomname,
        members: req.body.members
    }
    
    collaborationDao.findRoom(roomData).then(doc => {
     
        // console.log(data.roomName+" in controller")
       
        
        if(doc.length === 0) {

            collaborationDao.createRoom(roomData)
            socketconn.joinroom(roomData.roomName);

            res.status(201).send({
                payload: {
                    msg: "New Room Created"
                }
            })
        }else {
            socketconn.joinroom(roomData.roomName);
            res.status(200).send({
                payload: {
                    msg : `Joined ${req.params.roomname}`
                }
            })
        }
        
        
        
    })
}

function inviteUser(req, res) {

}



module.exports = { findRoomResponse, inviteUser }