// initialize database here
var mongoose = require('mongoose');

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect('mongodb://localhost/welp', { useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', (error) => console.log('error'));
db.once('open', () => console.log('database connected'));

// Register the schema with Mongoose as the 'Choice' collection.


module.exports = db;