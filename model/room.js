const mongoose = require('../db-connection/mongo');
const Schema = mongoose.Schema;

let roomSchema = new Schema({
    
    roomname : String,
    createdAt : Date,
    topic : String,
    members : [{memberId : String}]

});

let room = mongoose.model('room', roomSchema);

module.exports = room;