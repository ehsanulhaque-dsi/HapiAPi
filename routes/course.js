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
        path: '/add-student',
        handler: coursetController.addStudent
    },
    {
        method: 'PUT',
        path: '/remove-student',
        handler: coursetController.removeStudent
    },
    {
        method: 'PUT',
        path: '/add-teacher',
        handler: coursetController.addTeacher
    },
];