import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mangoose.Schema.Type.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Type.OrderId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'], //to aviod spelling mistakes
      default: 'PENDING',
    },
  },
  { timestamp: true }
);

export const Order = mongoose.model('Order', orderSchema);
