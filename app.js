const app = require('express')();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const path = require('path')
const io  = require('socket.io')(http);
const socketServer = require('./socket-connection/index.js');
const port = process.env.PORT || 3000;
const collaboration = require('./api/collaboration')
const logger = require('morgan')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(logger('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/api/v1", collaboration)

socketServer.instantiateSocket(io);

app.get('/', function(req,res){
    res.sendFile(path.resolve('./index.html'));
});

http.listen(port, function(){
    console.log("listening on port:"+port);
});
