const teacherController = require('../controllers/teacher');

module.exports = [
    { method: 'GET', path: '/teacher-list', handler: teacherController.getTeacherList},
    { method: 'GET', path: '/register-teacher', handler: teacherController.getRegisterTeacher},
    { method: 'POST', path: '/register-teacher', handler: teacherController.postRegisterTeacher},
    { method: 'GET', path: '/edit-teacher', handler: teacherController.getEditTeacher},
    { method: 'DELETE', path: '/delete-teacher/{id}', handler: teacherController.deleteTeacher},
    { method: 'PUT', path: '/update-teacher/{id}', handler: teacherController.updateTeacher}
];