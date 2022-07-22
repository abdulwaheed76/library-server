const express = require('express');
const personController = require('../controller/person');
const studenController = require('../controller/student')
const router = express.Router();
router.post('/person', studenController.createStudent);

module.exports = router;
