const Admin = require('../models/admin');

exports.getUsers = (req, res) => {
    console.log("Showing users");
    const admin = new Admin({
        firstName: "Ehsan",
        lastName: "Haque",
        email: "Eh@gmail.com",
        userId: "126"
    });
    //console.log(admin);
    admin
        .save()
        .then(result => {
            //console.log(result);
            return JSON.stringify(result);
        })
        .catch(err => {
            console.log(err);
        });
    return null;
};


exports.getUserById = (req, res, next) => {
    console.log("Showing user by id");
    res.status(201).json({
        message: 'Post created successfully!',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
};

exports.getAdminList = (req,res) => {
    console.log('Showing Admin list');
    return '';
}
exports.getRegisterAdmin = (req,res) => {
    console.log('Showing register admin page');
    return '';
}
exports.postRegisterAdmin = (req,res) => {
    console.log('Showing register admin post page');
    return '';
}

exports.getEditAdmin = (req,res) => {
    console.log('Showing edit admin page');
    return '';
}

exports.deleteAdmin = (req,res) => {
    console.log('Showing delete admin page');
    return '';
}

exports.updateAdmin = (req,res) => {
    console.log('Showing update admin page');
    return '';
}


