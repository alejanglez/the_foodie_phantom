const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
);

  //  products: [
  //   {
  //   name: String,
  //   imageUrl: String,
  //   category: String,
  //   price: Number,
  //   quantity: Number
  // }
  // ],

module.exports = model('Movie', movieSchema);
