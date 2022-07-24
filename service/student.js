const student = require('../dao/student')

const createStudentService = (stuData) => {
  const { firstName, lastName, email } = stuData;
  return student.createStudent(firstName, lastName, email);
}

const getStudentService = () => {
  return student.getStudent();
}

const getStudentByIdService = (id) => {
  return student.getStudentById(id);
}

const updateStudentService = (stuData) => {
  return student.updateStudent(stuData);
}

const deleteStudentService = (stuData) => {
  return student.deleteStudent(stuData);
}



exports.createStudentService = createStudentService
exports.getStudentService = getStudentService
exports.updateStudentService = updateStudentService
exports.getStudentByIdService = getStudentByIdService
exports.deleteStudentService = deleteStudentService