const router = require('express').Router();
const collaborationController = require('./collaboration.controller')

router.post('/chat-room/:roomname', collaborationController.findRoom);
router.get('/chat-room/:room/messages/:limit?/:page?', collaborationController.allMessages);
// router.get('/chat-room/:room/messages/:limit?/:page?', collaborationController.)

module.exports = router