const student = require('../service/student');

const createStudent = async (req, res) => {
    try {
        const id = await student.createStudentService(req.body);
        res.status(201).json(id);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
}

const getStudent = async (req, res) => {
    try {
        const id = await student.getStudentService();
        res.status(201).json(id);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
}

const updateStudent = async (req, res) => {
    try {
        const id = await student.updateStudentService(req.body);
        res.status(201).json(id);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
}

exports.createStudent = createStudent
exports.getStudent = getStudent
exports.updateStudent = updateStudent