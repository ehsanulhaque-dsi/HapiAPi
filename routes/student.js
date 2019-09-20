const studentController = require('../controllers/student');

module.exports = [
    { method: 'GET', path: '/student-list', handler: studentController.getStudentList },
    { method: 'GET', path: '/register-student', handler: studentController.getRegisterStudent },
    { method: 'POST', path: '/register-student', handler: studentController.postRegisterStudent },
    { method: 'GET', path: '/edit-student', handler: studentController.getEditStudent },
    { method: 'DELETE', path: '/delete-student/{id}', handler: studentController.deleteStudent },
    { method: 'PUT', path: '/update-student/{id}', handler: studentController.updateStudent }
];