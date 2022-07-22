const {createStudentService} = require('../service/student');

const createStudent = async (req, res) => {
    try {
        const id = await createStudentService(req.body);
        res.status(201).json(id);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
}

exports.createStudent = createStudent