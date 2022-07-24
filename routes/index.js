const express = require('express');
const studentController = require('../controller/student')
const bookController = require('../controller/book')
const router = express.Router();
const cors = require('cors')
//Students Routes

router.use(cors())
router.post('/student',  studentController.createStudent);
router.get('/student', studentController.getStudent)
router.get('/student/:id',  studentController.getStudentById)
router.put('/student', studentController.updateStudent)
router.delete('/student/:id', studentController.deleteStudent)


// Books Routes

router.post('/book', bookController.createBook)
router.get('/book', bookController.getBook)
router.get('/book/:id', bookController.getBookById)
router.put('/book', bookController.updateBook)
router.delete('/book/:id',bookController.deleteBook)
module.exports = router;
