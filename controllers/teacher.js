const Teacher = require('../models/teacher');

exports.getTeacherList = (req, res) => {
    return Teacher
        .find()
        .then(teachers => {
            if (!teachers) {
                return 'No student found';
            }
            else {
                return teachers;
            }
        })
        .catch(err => {
            console.log(err);
            return err;
        });

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
        dept: req.payload.dept

    })
    return teacher
        .save()
        .then(teacher => {
            if (teacher) {
                return (teacher);
            }else{
                return 'No teacher created!';
            }
        })
        .catch(err => {
            console.log(err);
            return err;
        });
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