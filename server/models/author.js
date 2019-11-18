const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoodb 会自动生成id
const authorSchema = new Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model('Author', authorSchema);