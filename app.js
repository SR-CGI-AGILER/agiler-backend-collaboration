const app = require('express')();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const path = require('path')
const io  = require('socket.io')(http);
const socketServer = require('./socket-connection/index.js');
const port = process.env.PORT || 3000;
const collaboration = require('./api/collaboration')
const logger = require('morgan')

app.use(logger('dev'))

app.use(bodyParser())
app.use("/api/v1", collaboration)

socketServer.instantiateSocket(io);

app.get('/', function(req,res){
    res.sendFile(path.resolve('./index.html'));
});

http.listen(port, function(){
    console.log("listening on port:"+port);
});