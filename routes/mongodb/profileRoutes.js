const express = require('express');
const router = express.Router();
const profileController = require('../../controllers/mongodb/profileController');

router.get('/:id', profileController.getProfileByUserId);
router.post('/:id', profileController.updateProfileByUserId);


module.exports = router;