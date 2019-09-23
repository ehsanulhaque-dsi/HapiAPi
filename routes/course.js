const coursetController = require('../controllers/course');

module.exports = [
    { method: 'GET', path: '/course-list', handler: coursetController.getCourseList },
    { method: 'POST', path: '/add-course', handler: coursetController.postAddCourse },
    { method: 'PUT', path: '/add-student', handler: coursetController.addStudent }
    /* { method: 'GET', path: '/edit-student/{id}', handler: coursetController.getStudentById },
    { method: 'GET', path: '/register-student', handler: coursetController.getRegisterStudent },
    { method: 'DELETE', path: '/delete-student/{id}', handler: coursetController.deleteStudent },
     */
];