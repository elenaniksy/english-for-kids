const { Schema, model } = require('mongoose');

const categoryModel = new Schema({
  id: {
    type: Number,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  items: {
    type: [
      {
        word: String,
        translation: String,
        image: String,
        audioSrc: String,
      },
    ],
    required: false,
  },
});

module.exports = model('Category', categoryModel);
