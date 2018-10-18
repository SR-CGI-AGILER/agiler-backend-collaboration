const router = require('express').Router();
const collaborationController = require('./collaboration.controller')

<<<<<<< HEAD
router.post('/chat-room/:roomname', collaborationController.findRoomResponse);
router.put('/chat-room/invite/:roomname/user/:userId', collaborationController.inviteUserUpdate);
router.get('/user/:userId/rooms', collaborationController.getRoomsResponse);
 
=======
router.post('/chat-room/:roomname', collaborationController.findRoom);
router.get('/chat-room/:room/messages/:limit?/:page?', collaborationController.allMessages);
// router.get('/chat-room/:room/messages/:limit?/:page?', collaborationController.)

>>>>>>> dev_atreya
module.exports = router