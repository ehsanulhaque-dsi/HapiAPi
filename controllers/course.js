const Course = require('../models/course');
const Student = require('../models/student');

exports.postAddCourse = (req, res) => {
    const course = new Course({
        courseTitle: req.payload.courseTitle,
        courseId: req.payload.courseId
    });
    return course
        .save()
        .then(course => {
            if (!course) {
                return res.response('Course not created').code(500);
            }
            else {
                return res.response('Course created').code(200);
            }
        })
        .catch(err => {
            return err;
        });
}
exports.getCourseList = (req, res) => {
    return Course
        .find()
        .populate('teachers')
        .populate("students")
        .then(courses => {
            if (!courses) {
                return res.response('Course not found').code(404);
            }
            else {
                return res.response(courses).code(200);
            }
        })
        .catch(err => {
            console.log(err);
            return err;
        });
}

exports.addStudent = (req, res) => {
    const studentId = req.query.studentId;
    const courseId = req.query.courseId;

    return Course
        .findByIdAndUpdate(courseId, {
            $push: { students: studentId }
        })
        .then(course => {
            if (!course) {
                return res.response('Course not found').code(404);
            } else {
                return Student
                    .findByIdAndUpdate(studentId, {
                        $push: { courses: courseId }
                    })
                    .then(student => {
                        if (!student) {
                            return Course
                                .findByIdAndUpdate(courseId, {
                                    $pull: { students: studentId }
                                })
                                .then(course => {
                                    return res.response('Student not found').code(404);
                                })
                                .catch(err => {
                                    return err;
                                })
                        }
                        else {
                            return res.response('Add successfully').code(200);
                        }
                    })
            }
        });
}

exports.removeStudent = (req, res) => {
    const studentId = req.query.studentId;
    const courseId = req.query.courseId;
    
    return Course
        .findByIdAndUpdate(courseId, {
            $pull: { students: studentId }
        })
        .then(course => {
            if (!course) {
                return res.response('Course not found').code(404);
            } else {
                return Student
                    .findByIdAndUpdate(studentId, {
                        $pull: { courses: courseId }
                    })
                    .then(student => {
                        if (!student) {
                            return Course
                                .findByIdAndUpdate(courseId, {
                                    $pull: { students: studentId }
                                })
                                .then(course => {
                                    return res.response('Student not found').code(404);
                                })
                                .catch(err => {
                                    return err;
                                });
                        }
                        else {
                            return res.response('Remove successfully').code(200);
                        }
                    });
            }
        });
}

exports.addTeacher = (req, res ) => {
    /* const teacherId = req.query.teacherId;
    console.log(teacherId);
    const courseId = req.query.courseId;
    return Course
        .findByIdAndUpdate(courseId, {
            $set: { teacher: teacherId }
        })
        .then(course => {
            return course;
        }); */
}
