const mongoose = require('mongoose');

mongoose.connect('mongodb://172.23.238.186:27017/local', function(){
    console.log("Connected to Mongo");
});

 module.exports = mongoose
