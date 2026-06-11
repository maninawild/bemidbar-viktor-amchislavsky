# Admin Roles

## Roles

### owner/admin

Full operational and financial access:

- payment settings
- commission settings
- bookings
- payments
- payouts
- all content
- all tours and slots
- user role management

Only this role should create payment links, process refunds, or view payout reports.

### guide/editor

Editorial and booking-prep access:

- articles
- archive
- gallery
- tour descriptions
- tour availability
- booking requests

Restrictions:

- no YooKassa keys
- no payment settings
- no commission control
- no payout report editing
- no provider webhook configuration

## Route Access

- `/admin/bookings`
  - owner/admin: read/write all
  - guide/editor: read and update non-financial notes/status preparation

- `/admin/tours`
  - owner/admin: read/write
  - guide/editor: read/write content fields

- `/admin/tour-slots`
  - owner/admin: read/write
  - guide/editor: read/write availability

- `/admin/payments`
  - owner/admin only

- `/admin/payouts`
  - owner/admin only

- `/admin/content`
  - owner/admin: read/write
  - guide/editor: read/write editorial content

## Security Rules

- Never send provider secrets to the browser.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to client components.
- Never store YooKassa secret key in the database.
- Use server-only environment variables for payment creation and webhook verification.
- Use Supabase RLS before production.

## Commission Settings

Commission must be controlled server-side by:

```env
SITE_COMMISSION_PERCENT=20
```

The admin UI may display this setting, but must not be the source of truth.
