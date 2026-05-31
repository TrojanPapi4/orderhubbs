# OrderHubbs - E-Commerce Platform with Gamification

Welcome to **OrderHubbs** - Your ultimate online marketplace with an engaging gamification experience!

## 🎮 Features

- **Product Marketplace**: Browse and purchase items from multiple supported online stores
- **Shopping Cart & Checkout**: Smooth purchasing experience with Stripe integration
- **User Accounts**: Secure authentication with JWT and bcrypt
- **Gamification System**:
  - Earn points on every purchase
  - Unlock badges and achievements
  - Climb the leaderboard
  - Collect rewards
- **Order Management**: Track your orders and purchase history
- **Supplier Integration**: Seamlessly integrate with multiple e-commerce suppliers

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TailwindCSS
- **Backend**: Node.js with Next.js API Routes
- **Database**: MongoDB
- **Authentication**: JWT + bcryptjs
- **Payments**: Stripe
- **Deployment**: Vercel

## 📋 Project Structure

```
orderhubbs/
├── app/
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── dashboard/        # User dashboard
│   ├── shop/             # Shopping pages
│   └── page.tsx          # Homepage
├── components/           # Reusable React components
├── lib/
│   ├── db.ts             # Database connection
│   ├── auth.ts           # Auth utilities
│   └── gamification.ts   # Gamification logic
├── models/               # MongoDB schemas
├── public/               # Static assets
├── styles/               # Global styles
└── .env.local            # Environment variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB instance (local or MongoDB Atlas)
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TrojanPapi4/orderhubbs.git
cd orderhubbs
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/orderhubbs
NEXT_PUBLIC_STRIPE_KEY=pk_live_your_stripe_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret
JWT_SECRET=your_jwt_secret_key
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **`/`** - Homepage with featured products
- **`/shop`** - Product catalog
- **`/auth/login`** - User login
- **`/auth/register`** - User registration
- **`/dashboard`** - User dashboard (orders, points, badges)
- **`/cart`** - Shopping cart
- **`/checkout`** - Payment checkout

## 🎯 API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/gamification/profile` - Get user gamification data

## 🎮 Gamification System

Users earn:
- **Points**: For every purchase (1 point per $1 spent)
- **Badges**: For achievements (First Purchase, Top Buyer, etc.)
- **Rewards**: Redeemable discounts based on accumulated points

## 📦 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
vercel deploy
```

### Connect Your Domain

1. In Namecheap, update nameservers to Vercel's nameservers
2. Add domain in Vercel project settings
3. Verify DNS configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📞 Support

For issues and questions, please create an GitHub issue in the repository.

---

**Made with ❤️ for OrderHubbs**
