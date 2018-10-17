var mongoose = require('../db-connection/mongo');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    roomName : String,
    createdAt : Date,
    members : [String]
    
});

var room = mongoose.model('room', roomSchema);

module.exports = room;