const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://tofful:123456@ds149268.mlab.com:49268/todoapp'
// };
// mongoose.connect(db.localhost || db.mlab);

mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };
