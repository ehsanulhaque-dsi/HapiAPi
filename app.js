const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');

const routes = require('./routes/index');




const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log("Server start running!!");
    server.route(routes);
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