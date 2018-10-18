const db = require('../../db-connection/mongo');
const room = require('../../model/room');
const message = require('../../model/message');


function getAllMessages(query) {
    // console.log(x.roomName, "this is X");
    
    return new Promise(function (resolve, reject) {
        // console.log(x.roomName)
        // message.find({
        //     // "messages" : x.
        //     "roomname": x.roomName
        // }).exec(function(err, data) {
        //     // console.log(err,data);
        //     resolve(data);
        // })
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

function findRoom(name) {
    return new Promise(function (resolve, reject) {
        console.log(name)
        room.find ({
            "roomName" : name.roomName
        },
        function(err, data) {
            resolve(data)        
        })
    })
}

function createRoom(name) {
    return new Promise(function (resolve, reject) {
        
        const x = new room({
            "roomName" : name.roomName,
            "members": name.members,
            
          
        })
        x.save(function (err, data) {
            if (err)
                console.log(err, data)
            resolve(data)
        })
    })
}

module.exports = { findRoom, createRoom, getAllMessages }