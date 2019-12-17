//traigo la libreria
const mongoose = require('mongoose');

//creo el esquema
const PostSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  author: String,
  content: String,
  date: { type: Date, default: Date.now},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref:
  'Comment'}]
});

//creo el modelo del esquema
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
