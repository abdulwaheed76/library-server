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

const getStudentById = async ({id}) => {
    const students = await db('student').where({ 'id': id })
    return students;
}


const updateStudent = async ({id, firstName, lastName, email}) => {
    const student = await db('student').where({ 'id': id })
        .update({
            email:email,
            first_name: firstName,
            last_name: lastName,
        })

    return student
}

const deleteStudent = async ({id})=>{
    const student = await db('student').delete().where({'id':id})
    return student
}
exports.createStudent = createStudent
exports.getStudent = getStudent
exports.getStudentById = getStudentById
exports.updateStudent = updateStudent
exports.deleteStudent = deleteStudent