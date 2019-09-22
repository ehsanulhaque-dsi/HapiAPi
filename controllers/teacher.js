const Teacher = require('../models/teacher');

exports.getTeacherList = (req, res) => {
    console.log('Showing teacher list');
    return '';

}

exports.getRegisterTeacher = (req, res) => {
    console.log('Showing teacher register page');
    return '';

}

exports.postRegisterTeacher = (req, res) => {
    const teacher = new Teacher({
        firstName: req.payload.firstName,
        lastName: req.payload.lastName,
        email: req.payload.email,
        userId: req.payload.userId,
        dept : req.payload.dept,
        studentId : req.payload.studentId

    })
    console.log(teacher);

    teacher
    .save()
    .then(teacher => {
        console.log(teacher);
    })
    .catch(err => {
        console.log(err);
    });
    console.log('Showing post teacher register page');
    return '';

}

exports.getEditTeacher = (req, res) => {
    console.log('Showing teacher edit page');
    return '';

}

exports.updateTeacher = (req, res) => {
    console.log('Showing teacher update page');
    return '';

}

exports.deleteTeacher = (req, res) => {
    console.log('Showing teacher delate page');
    return '';

}