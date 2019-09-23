const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseTitle : {
        type : String,
        required : true
    },
    courseId : {
        type : String,
        required : false
    },
    teachers : [{ 
        type : Schema.Types.ObjectId,
        ref : 'Teacher'
    }],
    students : [{ 
        type : Schema.Types.ObjectId,
        ref : 'Student'
    }]


});

module.exports = mongoose.model('Course', courseSchema);