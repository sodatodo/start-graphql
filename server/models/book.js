const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoodb 会自动生成id
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
})

module.exports = mongoose.model('Book', bookSchema);