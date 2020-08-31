const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const movieSchema = new Schema(
  {
    menuOwnerRef:String,
    title: String,
    description: String,
    imageUrl: String,
    price: Number
  },
  {
    timestamps: true
  }
);
module.exports = model('Movie', movieSchema);

// const { Schema, model } = require('mongoose');
// const menuSchema = new Schema(
//   {
//     menuOwnerRef: [{ type: Schema.Types.ObjectId, ref: "Cook" }],
//     //menuOwnerRef: [{cook.\_id,}],
//     title: { type: String, required: true },
//     desciption: { type: String, required: true },
//     imageUrl: {type: String, required: true},
//     price: { type: Number, required: true },
//   },
//   {
//     timestamps: true
//   }
// );
// module.exports = model('Menu', menuSchema);