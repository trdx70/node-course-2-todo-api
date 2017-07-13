const mongoose = require('mongoose');


// Connect to Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp2');

module.exports = {mongoose};
