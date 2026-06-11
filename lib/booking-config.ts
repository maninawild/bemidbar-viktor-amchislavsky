export const bookingStatuses = [
  "pending_confirmation",
  "confirmed_waiting_payment",
  "paid",
  "completed",
  "cancelled",
  "refunded"
] as const;

export type BookingStatus = (typeof bookingStatuses)[number];

export const userRoles = ["owner_admin", "guide_editor"] as const;

export type UserRole = (typeof userRoles)[number];

export function getSiteCommissionPercent() {
  const rawValue = process.env.SITE_COMMISSION_PERCENT ?? "20";
  const parsed = Number.parseFloat(rawValue);

  if (!Number.isFinite(parsed) || parsed < 0 || parsed > 100) {
    return 20;
  }

  return parsed;
}

export function calculatePayouts(amount: number, commissionPercent = getSiteCommissionPercent()) {
  const commissionAmount = Math.round((amount * commissionPercent) / 100);

  return {
    siteCommissionAmount: commissionAmount,
    guidePayoutAmount: amount - commissionAmount
  };
}
