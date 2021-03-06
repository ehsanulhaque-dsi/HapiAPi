const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : true
    },
    dept: {
        type : String,
        required : true
    },
    courses : [{ 
        type : Schema.Types.ObjectId,
        ref : 'Course'
    }]

});

module.exports = mongoose.model('Student', studentSchema);