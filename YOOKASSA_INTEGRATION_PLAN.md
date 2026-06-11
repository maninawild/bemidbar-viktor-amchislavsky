# YooKassa Integration Plan

## Goal

Use YooKassa as the primary payment provider for confirmed Russian tour bookings. Payment creation must happen only after manual confirmation by admin or Viktor.

## Required Server Env

```env
YOOKASSA_SHOP_ID=
YOOKASSA_SECRET_KEY=
YOOKASSA_WEBHOOK_SECRET=
SITE_COMMISSION_PERCENT=20
ADMIN_EMAIL=
GUIDE_NOTIFICATION_EMAIL=
RESEND_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Never expose these variables in client components or public page props.

## Backend Endpoints

Suggested server routes:

- `POST /api/bookings`
  - Creates booking with status `pending_confirmation`.
  - Sends admin/guide notification via Resend.

- `POST /api/admin/bookings/:id/confirm`
  - Admin-only.
  - Sets confirmed date/time/price.
  - Changes status to `confirmed_waiting_payment`.

- `POST /api/admin/bookings/:id/create-payment`
  - Admin-only.
  - Creates YooKassa payment.
  - Stores payment id, confirmation URL, amount, status.

- `POST /api/yookassa/webhook`
  - Server-only webhook receiver.
  - Verifies YooKassa notification.
  - Updates `payments` and `bookings`.
  - Creates or updates payout calculation.

- `POST /api/admin/payments/:id/refund`
  - Admin-only.
  - Creates refund in YooKassa.
  - Sets booking status `refunded` after confirmation.

## YooKassa Payment Creation

Create payment with:

- amount value in RUB
- currency `RUB`
- capture mode according to shop settings
- description with booking number and tour title
- metadata:
  - `booking_id`
  - `tour_id`
  - `user_contact_hash` if needed
- confirmation type `redirect`
- return URL to confirmed booking page

Store only safe provider metadata in DB. Do not store secret keys.

## Webhook Handling

On payment succeeded:

1. Verify webhook authenticity.
2. Find `Payment` by YooKassa payment id or metadata booking id.
3. Mark payment `succeeded`.
4. Mark booking `paid`.
5. Calculate:
   - `site_commission_amount = amount * SITE_COMMISSION_PERCENT / 100`
   - `guide_payout_amount = amount - site_commission_amount`
6. Upsert `Payout` row.

On payment canceled:

1. Mark payment `cancelled`.
2. Keep booking `confirmed_waiting_payment` or set `cancelled` depending on admin policy.

On refund succeeded:

1. Mark payment/refund state.
2. Mark booking `refunded`.
3. Reverse or adjust payout record.

## Payment Link UX

Public tour pages never show `Оплатить сейчас`.

Allowed states:

- New visitor: `Оставить заявку`
- Booking pending confirmation: `Заявка отправлена`
- Confirmed booking: `Оплатить экскурсию`
- Paid booking: `Оплачено`

## Provider Adapter

Suggested interface:

```ts
type PaymentProvider = {
  createPaymentLink(input: CreatePaymentInput): Promise<CreatePaymentResult>;
  verifyWebhook(request: Request): Promise<VerifiedPaymentEvent>;
  refundPayment(input: RefundPaymentInput): Promise<RefundPaymentResult>;
};
```

Keep YooKassa implementation behind this interface so CloudPayments, Robokassa, T-Bank, or SBP links can be added later.
