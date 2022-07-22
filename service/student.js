const student = require('../dao/student')

const createStudentService = (stuData) => {
  const { firstName, lastName, email } = stuData;
  return student.createStudent(firstName, lastName, email);
}

const getStudentService = () => {
  return student.getStudent();
}

const updateStudentService = (stuData) => {
  return student.updateStudent(stuData);
}


exports.createStudentService = createStudentService
exports.getStudentService = getStudentService
exports.updateStudentService = updateStudentService