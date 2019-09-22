const Student = require('../models/student');

exports.getStudentList = (req, res) => {
    Student
        .find()
        .then(students => {
            console.log(students);
            return students;
        })
        .catch(err => {
            console.log(err);
        });

    console.log('Showing student list');
    return '';
}

exports.getRegisterStudent = (req, res) => {
    console.log('Showing student register page');
    return '';

}

exports.postRegisterStudent = (req, res) => {
    const student = new Student({
        firstName: req.payload.firstName,
        lastName: req.payload.lastName,
        email: req.payload.email,
        userId: req.payload.userId,
        dept: req.payload.dept,
        teacherId: req.payload.teacherId
    });
    console.log(student);

    student.save()
        .then(student => {
            console.log(student);
        })
        .catch(err => {
            console.log(err);
        })


    //console.log(student);
    console.log('Showing post student register page');
    return '';

}

exports.getEditStudent = (req, res) => {
    console.log('Showing student edit page');
    return '';

}

exports.updateStudent = (req, res) => {
    console.log('Showing student update page');
    return '';

}

exports.deleteStudent = (req, res) => {
    console.log('Showing student delate page');
    return '';

}
