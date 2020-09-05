const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    userId: { type: mongoose.ObjectId, ref: "User", required: true },
    
    
    orders: [
      {
        menuId: {
          type: mongoose.ObjectId,
          ref: "Menu",
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

module.exports = model("Order", orderSchema);
