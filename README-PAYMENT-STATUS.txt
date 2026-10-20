PAYMENT STATUS ADMIN UPGRADE

Admin URL: https://cmwc2027bogota.com/admin/login.php

Open Race Signups. Each rider shows Pending Payment, Paid, or Confirmed.
Status starts at Pending Payment. Admin chooses a status and presses Save.
Paid is a manual update AFTER verifying money in your payment processor.
Confirmed means the organizer has verified and accepted that entry.
No participant emails are sent when admins change a status.

Status records are stored in forms/data/payment-statuses.json. DO NOT overwrite or delete forms/data/ on deployment: it contains live registrations and status data.

The statuses remain separate from the historic registration CSV, preserving existing signup data. To back up all registrations and statuses, download rider-signups.csv AND payment-statuses.json securely.

This is for LIVE one.com PHP. VS Code Live Server is HTML-only and does not execute PHP.
IMPORTANT: Change default admin password before publishing.
