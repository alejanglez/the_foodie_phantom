// User model here

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
     required: [true, 'Email is required.'],
     unique: true,
     lowercase: true,
     trim: true
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    },
    Date : {
      type: String,
      trim: true,
      required: [true, 'Date of birth is required.'],
      unique: true
    },
    Postcode: {
      type: String,
      trim: true,
      required: [true, 'Postcode is required.'],
      unique: true
    },
    Phone: {
      type: String,
      trim: true,
      required: [true, 'Phone is required.'],
      unique: true
      }
    },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);