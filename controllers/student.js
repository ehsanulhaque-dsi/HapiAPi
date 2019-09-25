const Student = require('../models/student');

exports.getStudentList = (req, res) => {
    return Student
        .find()
        .populate('courses')
        .then(students => {
            if (!students) {
                return res.response('Student not found').code(404);
            }
            else {
                return res.response(students).code(200);
            }
        })
        .catch(err => {
            return err;
        });

}

exports.postRegisterStudent = (req, res) => {
    const student = new Student({
        firstName: req.payload.firstName,
        lastName: req.payload.lastName,
        email: req.payload.email,
        userId: req.payload.userId,
        dept: req.payload.dept
    });

    return student
        .save()
        .then(student => {
            if (!student) {
                return res.response('Student not created.!').code(500);
            }
            else {
                console.log(student);
                return res.response('Student created.!').code(201);
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
        .populate('courses')
        .then(student => {
            if (student) {
                return res.response(student).code(200);
            }
            else {
                return res.response('Student not found.!').code(404);;
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
                return res.response('Update successful').code(200);
            } else {

                return res.response('Student not found').code(404);

            }

        })
        .catch(err => {
            return err;
        });

}

exports.deleteStudent = (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    return Student
        .findByIdAndDelete(_id)
        .then(result => {
            if (!result) {
                return res.response('Not found').code(404);
            } else {
                return res.response('Remove successful').code(200);
            }
        })
        .catch(err => {
            return err;
        });
}

exports.getCoursesByStudent = (req, res) => {
    const _id = req.params.id;

    return Student
        .findById(_id)
        .populate('courses')
        .then(student => {
            if(!student){
                return res.response('Student not found!').code(404);
            }
            else{
                return res.response(student.courses).code(200);
            }
        })
        .catch(err => {
            return err;
        });
}
