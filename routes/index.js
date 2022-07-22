const express = require('express');
const studenController = require('../controller/student')
const bookController = require('../controller/book')
const router = express.Router();

//Students Routes
router.post('/student', studenController.createStudent);
router.get('/student', studenController.getStudent)
router.put('/student',studenController.updateStudent)


// Books Routes

router.post('/book',bookController.createBook)
router.get('/book',bookController.getBook)
router.put('/book',bookController.updateBook)
module.exports = router;
