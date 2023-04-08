const express = require('express');
const router = express.Router();
const userController = require('../../controllers/mongodb/userController');

router.post('/register', userController.registerUser);
router.get('/', userController.getUsers);

router.get('/set-admin-role', userController.setAdminRole);
router.get('/set-moderator-role', userController.setModeratorRole);
router.get('/set-user-role', userController.setUserRole);
router.get('/check', userController.checkRules);
router.delete('/:id', userController.deleteUser);

// router.get('/:id', userController.getUserById);


module.exports = router;