const coursetController = require('../controllers/course');

module.exports = [
    {
        method: 'GET',
        path: '/course-list',
        handler: coursetController.getCourseList
    },
    {
        method: 'POST',
        path: '/add-course',
        handler: coursetController.postAddCourse
    },
    {
        method: 'PUT',
        path: '/add-courseStudent',
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
        handler: coursetController.removeCourseStudent
    },
    {
        method: 'PUT',
        path: '/add-courseTeacher',
        handler: coursetController.addCourseTeacher
    },
    {
        method: 'PUT',
        path: '/remove-courseTeacher',
        handler: coursetController.removeCourseTeacher
    }
];