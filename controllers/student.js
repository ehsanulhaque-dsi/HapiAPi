const Student = require('../models/student');

exports.getStudentList = (req, res) => {
    return Student
        .find()
        .then(students => {
            if (!students) {
                return 'No student found';
            }
            else {
                console.log(students);
                return students;
            }
        })
        .catch(err => {
            console.log(err);
            return err;
        });

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
        dept: req.payload.dept
    });
    console.log(student);

    return student
        .save()
        .then(student => {
            if(!student){
                return 'Student not created.!';
            }
            else{
                console.log(student);
                return student;
            }
        })
        .catch(err => {
            console.log(err);
        });

}

exports.getStudentById = (req, res) => {
    const _id = req.params.id;
    return Student
        .findById(_id)
        .then(student => {
            if (student) {
                console.log(student);
                std = student
                return student;
            }
            else {
                return 'No user found';
            }

        }).catch(err => {
            console.log(err);
            return err;
        });

}

exports.updateStudent = (req, res) => {

    const _id = req.params.id;
    const firstName = req.payload.firstName;
    const lastName = req.payload.lastName;
    const email = req.payload.email;
    const dept = req.payload.dept;
    const userId = req.payload.userId;

    return Student
        .findByIdAndUpdate(_id, {
            $set: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                dept: dept,
                userId: userId
            }
        })
        .then(student => {
            if (student) {
                console.log(student);
                return student;
            } else {
                return 'Update nothing';
            }

        });

}

exports.deleteStudent = (req, res) => {
    console.log('Showing student delate page');
    return '';

}
