const { Schema, model } = require('mongoose');

const cookSchema = new Schema(

  {
    cookname: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash2: { type: String, required: true, minlength: 6 },
    fullName: { type: String, required: true, maxlength: 20 },
    birthday: { type: Date },
    zipcode: { type: Number, required: true, maxlength: 30 },
    address: { type: String, required: true, maxlength: 30 },
    phone: { type: String, required: true, minlength: 9, maxlength: 9 },
    motivation: {type: String, required: true},
    certification: {type: String},
    foodhHandlingNumber: {type: Number, required: true, minlength: 9, maxlength: 9,},
    kitchenNumber:{type: Number, required: true, minlength: 9, maxlength: 9,},
    status:{type: String, required: true},
    
  },
  {
    timestamps: true
  }
);

module.exports = model('Cook', cookSchema);