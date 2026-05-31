import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    items: [
      {
        productId: mongoose.Schema.Types.ObjectId,
        quantity: { type: Number, default: 1 },
        addedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);
