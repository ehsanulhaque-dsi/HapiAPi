const adminController = require('../controllers/admin');
const studentController = require('../controllers/student');


module.exports = [
    { method: 'GET', path: '/users', handler: adminController.getUsers },
    { method: 'GET', path: '/users/{id}', handler: adminController.getUserById },
    { method: 'GET', path: '/', handler: studentController.getStudentList},
    { method: 'GET', path: '/admin-list', handler: adminController.getAdminList},
    { method: 'GET', path: '/register-admin', handler: adminController.getRegisterAdmin},
    { method: 'POST', path: '/register-admin', handler: adminController.postRegisterAdmin},
    { method: 'GET', path: '/edit-admin', handler: adminController.getEditAdmin},
    { method: 'DELETE', path: '/delete-admin/{id}', handler: adminController.deleteAdmin},
    { method: 'PUT', path: '/update-admin/{id}', handler: adminController.updateAdmin}
];