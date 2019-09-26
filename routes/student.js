const studentController = require('../controllers/student');

module.exports = [
    {
        method: 'GET',
        path: '/student-list',
        handler: studentController.getStudentList
    },
    {
        method: 'POST',
        path: '/register-student',
        handler: studentController.postRegisterStudent
    },
    {
        method: 'GET',
        path: '/student-byId/{id}',
        handler: studentController.getStudentById
    },
    {
        method: 'DELETE',
        path: '/delete-student/{id}',
        handler: studentController.deleteStudent
    },
    {
        method: 'PUT',
        path: '/update-student/{id}',
        handler: studentController.updateStudent
    },
    {
        method: 'GET',
        path: '/student-courses/{id}',
        handler: studentController.getCoursesByStudent
    }
];