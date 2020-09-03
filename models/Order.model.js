const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const chartSchema = new Schema(
  {
    menuOrderedRef: { type: mongoose.ObjectId, ref: "Menu", required: true },
    orderOwnerRef: { type: mongoose.ObjectId, ref: "Cook", required: true },
    orderBuyerRef: { type: mongoose.ObjectId, ref: "User", required: true },
    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: [1, "Invalid value for product quantity"],
      max: [6, "Invalid value for product quantity"],
    },
    price: { type: Number, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// chartSchema.methods.findcustomerById = (id) => {
//   return this.orderBuyerRef;
// };

module.exports = model("Chart", chartSchema);
