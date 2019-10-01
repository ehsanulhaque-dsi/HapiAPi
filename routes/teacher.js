const teacherController = require('../controllers/teacher');
const Joi = require('@hapi/joi');

module.exports = [
    {
        method: 'GET',
        path: '/teacher-list',
        handler: teacherController.getTeacherList
    },
    {
        method: 'POST',
        path: '/register-teacher',
        options: {
            validate: {
                payload: Joi.object({

                    firstName: Joi.string().min(5).max(15),
                    lastName: Joi.string().max(15),
                    email: Joi.string().email().required(),
                    dept: Joi.string().min(3).max(30)

                }).options({ stripUnknown: true })
            }
        },
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