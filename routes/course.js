const coursetController = require('../controllers/course');
const Joi = require('@hapi/joi');
const Course = require('../models/course');

module.exports = [
    {
        method: 'GET',
        path: '/course-list',
        handler: coursetController.getCourseList
    },
    {
        method: 'POST',
        path: '/add-course',
        handler: coursetController.postAddCourse,
        options: {
            validate: {
                payload: Joi.object({

                    courseTitle: Joi.string().min(5).max(50),
                    courseId: Joi.string().min(3).max(5)

                }).options({ stripUnknown: true })
            }
        }
    },
    {
        method: 'PUT',
        path: '/add-courseStudent',
        options: {
            validate: {
                query: Joi.object({

                    studentId: Joi.string().required(),
                    courseId: Joi.string().required()

                }).options({ stripUnknown: true })
            }
        },
        handler: coursetController.addCourseStudent
    },
    {
        method: 'GET',
        path: '/course-byId/{id}',
        handler: coursetController.getCourseById
    },
    {
        method: 'PUT',
        path: '/remove-courseStudent',
        options: {
            validate: {
                query: Joi.object({

                    studentId: Joi.string().required(),
                    courseId: Joi.string().required()

                }).options({ stripUnknown: true })
            }
        },
        handler: coursetController.removeCourseStudent
    },
    {
        method: 'PUT',
        path: '/add-courseTeacher',
        options: {
            validate: {
                query: Joi.object({

                    teacherId: Joi.string().required(),
                    courseId: Joi.string().required()

                }).options({ stripUnknown: true })
            }
        },
        handler: coursetController.addCourseTeacher
    },
    {
        method: 'PUT',
        path: '/remove-courseTeacher',
        options: {
            validate: {
                query: Joi.object({

                    teacherId: Joi.string().required(),
                    courseId: Joi.string().required()

                }).options({ stripUnknown: true })
            }
        },
        handler: coursetController.removeCourseTeacher
    }
];