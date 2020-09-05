const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const chartSchema = new Schema(
  {
    menuId: { type: mongoose.ObjectId, ref: "Menu", required: true },
    menuOwnerRef: { type: mongoose.ObjectId, ref: "Cook", required: true },
    // Array of products
    orders: [
      {
        userId: {
          type: mongoose.ObjectId,
          ref: "User",
          required: true 
        },
        quantity: {
          type: Number,
          default: 1,
          min: [1, "Invalid value for product quantity"],
        },
      },
    ],
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
