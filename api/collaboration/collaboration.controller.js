const collaborationDao = require('../../dao/collaboration/collaboration.dao')
const socketconn = require('../../socket-connection/index');


function findRoomResponse(req, res) {
    let roomData = {
        roomName: req.params.roomname,
        members: req.body.members
    }

    collaborationDao.findRoom(roomData).then(doc => {

        if (doc.length === 0) {
            collaborationDao.createRoom(roomData)
            socketconn.joinroom(roomData.roomName);
            res.status(201).send({
                payload: {
                    msg: "New Room Created"
                }
            })
        } else {
            socketconn.joinroom(roomData.roomName);
            res.status(200).send({
                payload: {
                    msg: `Joined ${req.params.roomname}`
                }
            })
        }
    })
}

function inviteUserUpdate(req, res) {
    
    let userData = {
        roomName: req.params.roomname,
        userId: req.params.userId
    }
    collaborationDao.addUser(userData).then(doc => {
        res.status(201).send({
            msg: "User added to room",
            data: doc
        });
    })
}   

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

function sendMessages(req,res)  {
    let queryParams = {
        roomName: req.params.room,
        message: req.body.messages,
        createdBy: req.body.createdBy,
        createdAt: req.body.createdAt
        
    }
    console.log(queryParams)
    collaborationDao.postMessages(queryParams).then(doc => {
        res.send({
            length: doc.length,            
            payload: {
                data: doc
            }
        })
    })
}

function getRoomsResponse(req, res) {
    let userData = {
        member: req.params.userId
    }
    collaborationDao.getRooms(userData).then(doc => {
        res.status(200).send({
            payload: {
                data: doc
            }
        })
    })
}


module.exports = {
    findRoomResponse,
    inviteUserUpdate,
    getRoomsResponse,
    allMessages,
    sendMessages
}
