const teacherController = require('../controllers/teacher');

module.exports = [
    {
        method: 'GET',
        path: '/teacher-list',
        handler: teacherController.getTeacherList
    },
    {
        method: 'POST',
        path: '/register-teacher',
        handler: teacherController.postRegisterTeacher
    },
    {
        method: 'GET',
        path: '/teacher-byId/{id}',
        handler: teacherController.getTeacherById
    },
    {
        method: 'DELETE',
        path: '/delete-teacher/{id}',
        handler: teacherController.deleteTeacher
    },
    {
        method: 'PUT',
        path: '/update-teacher/{id}',
        handler: teacherController.updateTeacher
    },
    {
        method: 'GET',
        path: '/teacher-courses/{id}',
        handler: teacherController.getCoursesByTeacher
    }
];