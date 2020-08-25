// User model here

const { Schema, model } = require('mongoose');

const cookSchema = new Schema(
  {
    cookname: {
      type: String,
      trim: true,
      required: [true, 'Cookname is required.'],
      unique: true
    },
    
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('cook', cookSchema);
