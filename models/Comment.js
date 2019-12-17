//traigo la libreria
const mongoose = require('mongoose');

//creo el esquema
const CommentSchema = new mongoose.Schema({
  author: String,
  content: String,
  date: { type: Date, default: Date.now}
});

//creo el modelo del esquema
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
