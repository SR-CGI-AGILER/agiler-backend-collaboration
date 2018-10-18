const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', function() {
    console.log("mongo connection created");
});

module.exports = mongoose;