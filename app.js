const app = require ('express')();
const  bodyParser = require ('body-parser');
const http = require ('http').Server(app);
const  path = require ('path')
const io = require ('socket.io')(http);
const socketServer = require ('./socket-connection/index.js');
const port = process.env.PORT || 3000;
const collaboration = require ('./api/collaboration')

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
 });

app.use(bodyParser.urlencoded({extended: false}))
app.use("/api/v1", collaboration)

socketServer.instantiateSocket(io);

http.listen(port, function() {
    console.log("listening on port: " + port);
});

