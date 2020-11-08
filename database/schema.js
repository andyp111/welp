var mongoose = require('mongoose');

// Complete the schema here

var choiceSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('choice', choiceSchema);
