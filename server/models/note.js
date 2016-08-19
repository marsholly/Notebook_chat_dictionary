const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  message: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now },
  user_name: {type: String, required: true}
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
