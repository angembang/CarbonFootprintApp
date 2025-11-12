const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');

router.post('/travels', travelController.addTravel);
router.get('/travels', travelController.getTravels);
router.get('/travels/resume', travelController.getResume);

module.exports = router;
