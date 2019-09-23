const Course = require('../models/course');

exports.postAddCourse = (req, res) => {
    const course = new Course({
        courseTitle : req.payload.courseTitle,
        courseId : req.payload.courseId
    });
    console.log(course);

    return course
        .save()
        .then(course => {
            if (!course) {
                return 'No cousres created.';
            }
            else {
                console.log(course);
                return course;
            }
        })
        .catch(err => {
            console.log(err);
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
                return 'No student found';
            }
            else {
                console.log(courses);
                return courses;
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
        $push : { students : studentId}
    })
    .then(course => {
        if(!course){
            return 'Update fail!';
        }else{
            return course;
        }
    });
}
