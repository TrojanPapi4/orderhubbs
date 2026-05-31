import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    originalPrice: Number,
    category: String,
    supplier: { type: String, required: true },
    supplierId: String,
    image: String,
    images: [String],
    sku: String,
    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true },
    tags: [String],
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);
