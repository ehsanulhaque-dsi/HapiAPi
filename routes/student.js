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
        options: {
            validate: {
                payload: Joi.object({

                    firstName: Joi.string().min(5).max(15),
                    lastName: Joi.string().min(5).max(15),
                    email: Joi.string().email({ minDomainAtoms: 2 }),
                    userId: Joi.string().min(5).max(10),
                    dept: Joi.string().min(3).max(30)

                }).options({ stripUnknown: true })
            }
        },
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