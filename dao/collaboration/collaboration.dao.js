const db = require('../../db-connection/mongo');
const room = require('../../model/room');
const message = require('../../model/message')

function findRoom(name) {
    return new Promise(function (resolve, reject) {
        // console.log(name.roomName)
        room.find({
            "roomName": name.roomName
        }, function (err, data) {
            // console.log(data, "sdfsdfsdfsdfsdfsdf")
            resolve(data)
        })
    })
}

function createRoom(name) {
    console.log("lkasjdlkajsdlkajsldkj@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    return new Promise(function (resolve, reject) {
        const temp = new room({
            "roomName": name.roomName,
            "members": name.members
        })
        temp.save(function (err, data) {
            if (err)
                console.log(err, data, "Sdfasdfasdfasdfasdfasdfasdf")
            resolve(data)
        })
    })
}

function addUser(user) {
    return new Promise(function (resolve, reject) {
        room.findOneAndUpdate({
            "roomName": user.roomName
        }, {
            $push: {
                "members": user.userId
            }
        }, function (err, data) {
            resolve(data)
        })
    })

}

function getRooms(userData) {
    return new Promise(function (resolve, reject) {
        console.log(userData)
        console.log("afdffvcxdfhgvbjncfxhycghjvbjn")
        room.find({
            members: userData.member
        }, function (err, data) {
            // console.log(data)
            resolve(data)
        })
    })
}   

function getAllMessages(query) {
    
    
    return new Promise(function (resolve, reject) {
        
        message.find({
            "roomname": query.roomName
        }).limit(query.limit)
        .skip(query.page * query.limit)
        .exec(function(err, doc) {
            if (err) {
                reject(err)
            }else {
                resolve(doc)
            }
        })
})
}


module.exports = {
    findRoom,
    createRoom,
    addUser,
    getRooms,
    getAllMessages
}
