import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    avatar: { type: String, default: null },
    phone: { type: String, default: null },
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    totalPoints: { type: Number, default: 0 },
    badges: [String],
    totalPurchases: { type: Number, default: 0 },
    totalSpent: { type: Number, default: 0 },
    redeemedRewards: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
