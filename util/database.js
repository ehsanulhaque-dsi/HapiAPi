const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://Ehsan:connecttomongo@learnnodewithmongo-xnyar.mongodb.net/learnNodeWithMongo?retryWrites=true&w=majority',  { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(client => {
            console.log("Connected..!");
            _db = client.db();
            //console.log(_db);
            callback();
        }).catch(err => {
            console.log("Faile due to : " + err);
            throw err;
        });
};

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw 'No database found!';
}

//module.exports = mongoConnect;
//module.exports = getDb;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;