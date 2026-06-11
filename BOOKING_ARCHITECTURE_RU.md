# Booking Architecture for Russian Payments

## Positioning

Payments for Bemidbar should be Russian-payment-ready. Stripe must not be the primary provider because most payments are expected to happen inside Russia.

Primary provider: YooKassa / ЮKassa.

Future-compatible providers:

- CloudPayments
- Robokassa
- Tinkoff / T-Bank acquiring
- SBP payment links

## MVP Booking Flow

1. User chooses a tour.
2. Public CTA says `Оставить заявку`.
3. User submits booking request.
4. Booking is created with status `pending_confirmation`.
5. Admin or Viktor confirms date, time, participants, and price.
6. Booking status becomes `confirmed_waiting_payment`.
7. Server creates a YooKassa payment link.
8. User sees `Оплатить экскурсию` only after confirmation.
9. YooKassa webhook confirms payment.
10. Booking status becomes `paid`.
11. System calculates:
    - site commission from `SITE_COMMISSION_PERCENT`
    - guide payout as the remaining amount
12. Admin panel shows bookings, payments, and payout report.

No instant calendar checkout in MVP. Tours are personal services and require manual confirmation first.

## Booking Statuses

- `pending_confirmation`
- `confirmed_waiting_payment`
- `paid`
- `completed`
- `cancelled`
- `refunded`

## Core Models

- `Tour`
- `TourSlot`
- `Booking`
- `Payment`
- `Payout`
- `Article`
- `ArchiveItem`
- `GalleryItem`
- `UserRole`

## Public UI Rules

- Tour CTA: `Оставить заявку`
- Payment CTA: `Оплатить экскурсию`
- Payment CTA appears only after manual confirmation.
- Do not show payment provider keys, webhook secrets, admin emails, or guide emails in frontend code.
- Do not show Stripe as the primary payment path.

## Server Configuration

Required environment variables:

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

`SITE_COMMISSION_PERCENT` is read from server config. UI may display calculated values, but it must not be the source of truth.

## Admin Routes

- `/admin/bookings`
- `/admin/tours`
- `/admin/tour-slots`
- `/admin/payments`
- `/admin/payouts`
- `/admin/content`

## Payment Provider Boundary

Create a provider adapter layer instead of calling YooKassa directly from UI code:

- `createPaymentLink(booking)`
- `getPaymentStatus(paymentId)`
- `refundPayment(paymentId, amount)`
- `verifyWebhook(request)`

This makes future CloudPayments, Robokassa, T-Bank, or SBP integrations possible without rewriting booking logic.
