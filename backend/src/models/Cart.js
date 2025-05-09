const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId, // Change this to ObjectId
    ref: "Product", // Reference to Product model, if you want to populate it later
  },
  quantity: Number,
  size:String
});

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    items: [cartItemSchema],
  },  
  { timestamps: true }
);

cartSchema.statics.clearCart = async function (userId) {
  return this.findOneAndUpdate(
    { userId }, 
    { $set: { items: [] } },
    { new: true }  // Return the updated document
  );
};

module.exports = mongoose.model("Cart", cartSchema);
