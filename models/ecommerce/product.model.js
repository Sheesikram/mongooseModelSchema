import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    discription: {
      type: String,
      required: true,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
  },
  { timestamp: true }
);
export const Product = mongoose.model('Product', productSchema);
