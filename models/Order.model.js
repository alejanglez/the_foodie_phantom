const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const chartSchema = new Schema(
  {
    // userId: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User.model",
    },
    ordered: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
    // Array of products
    order: [
      {
        movieId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Movie.model",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Chart", cartSchema);