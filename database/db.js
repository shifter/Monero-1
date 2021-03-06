const Sequelize = require('sequelize')
const db = new Sequelize('database', null, null, {
// const db = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    // dialect: 'mysql',
    dialect: 'sqlite',
    // only if you  use sqlite
    storage: '../database/storage.sqlite'
})

const Users = db.define('users',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    total: Sequelize.INTEGER,
    totalhashes: Sequelize.INTEGER,
    totaltime: Sequelize.STRING,
    totalamount: Sequelize.INTEGER,
    org: Sequelize.STRING
})
Users.create({
    username: 'not logged',
    password: 'no pass',
    email: 'Sequelize.STRING',
    total: 0,
    totalhashes: 0,
    totaltime: 'in no time',
    totalamount: 0,
    org: 'my pocket'
})

Users.sync();
exports.Users = Users;



//// MONGODB Refactor - Leave Commented for now
// const mongoose = require('mongoose')
// const dbCon = mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds151955.mlab.com:51955/monerousers', { useMongoClient: true })
// //// const dbCon = mongoose.connect('mongodb://localhost/monerousers', { useMongoClient: true }) //Using mLabs Database instead so leave this commented out
// mongoose.Promise = global.Promise;

// dbCon.on('error', function(err) {
//   console.log('Mongoose had connection ERROR: ' + err);
// })
// dbCon.on('connected', function() {
//   console.log('MongooseDB is CONNECTED');
// })

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
//   totalhashes: Number,
//   totaltime: Number,
//   totalamount: Number,

// });
//  const Users = mongoose.model('Users', userSchema);

//  module.exports = {dbCon, Users}
