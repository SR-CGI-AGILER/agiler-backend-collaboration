const mongoose = require('../db-connection/mongo');
const schemaM = mongoose.Schema;

let messageSchema = new schemaM({
    roomname : String,
    messages : String,
    createdAt : { type: Date, default: Date.now },
    createdBy : String,
    picture: String
});

let message = mongoose.model('message', messageSchema);

module.exports = message;