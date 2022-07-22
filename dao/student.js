const db = require('../db/db');

const createStudent = async (firstName, lastName, email) => {
    console.log(firstName, lastName, email)
    const [id] = await db('student')
        .insert({
            email: email,
            first_name: firstName,
            last_name: lastName,
        })
        .returning('id');

    return id;
}

const getStudent = async () => {
    const students = await db('student').select()
    return students;
}

const updateStudent = async ({id, firstName, lastName, email}) => {
    console.log(id)
    const student = await db('student').where({ 'id': id })
        .update({
            email:email,
            first_name: firstName,
            last_name: lastName,
        })

    return student
}
exports.createStudent = createStudent
exports.getStudent = getStudent
exports.updateStudent = updateStudent