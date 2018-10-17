const router = require('express').Router();
const collaborationController = require('./collaboration.controller')

router.post('/chat-room/:roomname', collaborationController.findRoomResponse);
router.post('/chat-room/invite/:roomname/user/:userId', collaborationController.inviteUser);
 
module.exports = router