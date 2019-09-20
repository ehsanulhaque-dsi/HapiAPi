const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log("Server start running!!");

    server.route(adminRoutes);
    server.route(studentRoutes);
    server.route(teacherRoutes);

};

mongoose
    .connect(
        'mongodb+srv://Ehsan:connecttomongo@learnnodewithmongo-xnyar.mongodb.net/hapijs?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(result => {
        init();
    })
    .catch(err => {
        console.log(err);
    });

//const studentRoutes = require('./routes/student');