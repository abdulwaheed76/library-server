const {createStudent} = require('../dao/student')

const createStudentService = (stuData) =>{
  const { firstName, lastName, email } = stuData;
  return createStudent(firstName,lastName,email);
}

exports.createStudentService = createStudentService