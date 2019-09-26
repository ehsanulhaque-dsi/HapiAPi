const Teacher = require('../models/teacher');

exports.getTeacherList = (req, res) => {
    console.log("List of teacher");
    return Teacher
        .find()
        .populate('courses')
        .then(teachers => {
            console.log(teachers);
            if (!teachers) {
                return res.response('No student found').code(404);
            }
            else {
                return res.response(teachers).code(200);
            }
        })
        .catch(err => {
            return err;
        });

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
                return res.response('Teacher Created').code(200);

            } else {
                return res.response('Teacher not Created').code(500);
            }
        })
        .catch(err => {
            console.log(err);
            return err;
        });
}
exports.getTeacherById = (req, res) => {
    const _id = req.params.id;
    return Teacher
        .findById(_id)
        .populate('courses')
        .then(teacher => {
            if (teacher) {
                return res.response(teacher).code(200);
            }
            else {
                return res.response('Student not found.!').code(404);;
            }

        }).catch(err => {
            return err;
        });

}

exports.updateTeacher = (req, res) => {
    const _id = req.params.id;

    const firstName = req.payload.firstName;
    const lastName = req.payload.lastName;
    const email = req.payload.email;
    const userId = req.payload.userId;
    const dept = req.payload.dept;

    return Teacher
        .findByIdAndUpdate(_id, {
            $set: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                dept: dept,
                userId: userId
            }
        })
        .then(teacher => {
            if (!teacher) {
                return res.response('Teacher not found').code(404);
            }
            else {
                return res.response('Teacher update successful').code(200);
            }
        })
        .catch(err => {
            return err;
        });

}

exports.deleteTeacher = (req, res) => {
    console.log('Showing teacher delate page');
    return '';

}

exports.getCoursesByTeacher = (req, res) => {
    const _id = req.params.id;

    return Teacher
        .findById(_id)
        .populate('courses')
        .then(teacher => {
            if (!teacher) {
                return res.response('Student not found!').code(404);
            }
            else {
                return res.response(teacher.courses).code(200);
            }
        })
        .catch(err => {
            return err;
        });
}