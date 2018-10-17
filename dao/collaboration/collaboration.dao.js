const db = require('../../db-connection/mongo');
const room = require('../../model/room');

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
module.exports = { findRoom, createRoom }