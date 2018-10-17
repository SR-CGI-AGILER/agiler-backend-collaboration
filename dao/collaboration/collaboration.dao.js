const db = require('../../db-connection/mongo');
const room = require('../../model/room');

function findRoom(name) {
    return new Promise(function (resolve, reject) {
        console.log(name)
        room.find({
            "roomName": name.roomName
        }, function (err, data) {
            // console.log(err, data)
            resolve(data)
        })
    })

}

function createRoom(name) {
    return new Promise(function (resolve, reject) {
        const temp = new room({
            "roomName": name.roomName,
            "members": name.members
        })
        temp.save(function (err, data) {
            if (err)
                console.log(err, data)
            resolve(data)
        })
    })
}
module.exports = { findRoom, createRoom }