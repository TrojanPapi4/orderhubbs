// Gamification constants
export const POINTS_PER_DOLLAR = 1;
export const BADGE_ACHIEVEMENTS = {
  FIRST_PURCHASE: 'first_purchase',
  TEN_PURCHASES: 'ten_purchases',
  HUNDRED_DOLLARS: 'hundred_dollars',
  TOP_BUYER: 'top_buyer',
  POWER_SHOPPER: 'power_shopper',
};

export const REWARD_TIERS = [
  { points: 100, discount: 5 },
  { points: 250, discount: 15 },
  { points: 500, discount: 35 },
  { points: 1000, discount: 100 },
];

export interface GamificationProfile {
  userId: string;
  totalPoints: number;
  level: number;
  badges: string[];
  totalPurchases: number;
  totalSpent: number;
  availableRewards: number;
  redeemedRewards: number;
}

export function calculateLevel(points: number): number {
  return Math.floor(points / 100) + 1;
}

export function calculateRewardTier(points: number): number {
  const tier = REWARD_TIERS.findIndex((t) => points < t.points);
  return tier === -1 ? REWARD_TIERS.length : tier;
}

export function addPointsFromPurchase(amount: number): number {
  return Math.floor(amount * POINTS_PER_DOLLAR);
}

export function shouldUnlockBadge(
  badge: string,
  purchases: number,
  totalSpent: number,
  existingBadges: string[]
): boolean {
  if (existingBadges.includes(badge)) return false;

  switch (badge) {
    case BADGE_ACHIEVEMENTS.FIRST_PURCHASE:
      return purchases >= 1;
    case BADGE_ACHIEVEMENTS.TEN_PURCHASES:
      return purchases >= 10;
    case BADGE_ACHIEVEMENTS.HUNDRED_DOLLARS:
      return totalSpent >= 100;
    case BADGE_ACHIEVEMENTS.POWER_SHOPPER:
      return totalSpent >= 500 && purchases >= 20;
    default:
      return false;
  }
}
