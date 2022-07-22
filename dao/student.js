const db = require('../db/db');

const createStudent = async (firstName, lastName, email) => {
    console.log(firstName,lastName,email)
    const [id] = await db('student')
        .insert({
            email:email,
            first_name: firstName,
            last_name: lastName,
        })
        .returning('id');

    return id;
}

exports.createStudent = createStudent