const router = require('express').Router();
const collaborationController = require('./collaboration.controller')

router.post('/chat-room/:roomname', collaborationController.findRoom);
 
module.exports = router