const router = require('express').Router();
const collaborationController = require('./collaboration.controller')

router.post('/chat-room/:roomname', collaborationController.findRoomResponse);
router.put('/chat-room/invite/:roomname/user/:userId', collaborationController.inviteUserUpdate);
router.get('/user/:userId/rooms', collaborationController.getRoomsResponse);
 
module.exports = router