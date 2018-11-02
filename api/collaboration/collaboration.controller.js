const collaborationDao = require('../../dao/collaboration/collaboration.dao')
const socketconn = require('../../socket-connection/index');


function findRoomResponse(req, res) { //find a room; create if doesn't exist
    let roomData = {
        roomName: req.params.roomname,
        members: req.body.members
    }
    socketconn.joinroom(roomData.roomName);
    collaborationDao.findRoom(roomData).then(doc => {

        if (doc.length === 0) {
            collaborationDao.createRoom(roomData)

            res.status(201).send({
                payload: {
                    msg: "New Room Created"
                }
            })
        } else {
            // socketconn.joinroom(roomData.roomName);
            res.status(200).send({
                payload: {
                    msg: `Joined ${req.params.roomname}`
                }
            })
        }
    })
}

function inviteUserUpdate(req, res) { //invite user to a room

    let userData = {
        roomName: req.params.roomname,
        userId: req.params.userId
    }
    socketconn.joinroom(userData.roomName)
    collaborationDao.addUser(userData).then(doc => {;
        res.status(201).send({
            msg: "User added to room",
            data: doc
        });
    })
}

function allMessages(req, res) { //get all messages of a room
    let queryParams = {
        roomName: req.params.room,
        limit: parseInt(req.query.limit) || 50,
        page: parseInt(req.query.page) || 0,
        picture: req.body.picture
    }
    console.log("joining room", queryParams.roomName)
    socketconn.joinroom(queryParams.roomName);
    collaborationDao.getAllMessages(queryParams).then(doc => {
        res.send({
            length: doc.length,
            payload: {
                data: doc
            }
        })
    })
}

function sendMessages(req, res) { //post a message to a room
    let queryParams = {
        roomname: req.params.room,
        messages: req.body.messages,
        createdBy: req.body.createdBy,
        createdAt: req.body.createdAt,
        picture: req.body.picture
    }
    // console.log(queryParams)

    socketconn.sendMessageToRoom(queryParams);
    collaborationDao.postMessages(queryParams).then(doc => {
        res.send({
            length: doc.length,
            payload: {
                data: doc
            }
        })
    })
}

function getRoomsResponse(req, res) { //get all rooms of a particular user
    let userData = {
        member: req.params.userId
    }
    // socketconn.joinroom(roomData.roomName);
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