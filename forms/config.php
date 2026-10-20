<?php
// ONE.COM FORM CONFIGURATION
// Signup/admin notifications for rider, volunteer, sponsor, and subscriber forms.
$SIGNUP_EMAIL = 'signup@cmwc2027bogota.com';

// Contact form notifications.
$CONTACT_EMAIL = 'signup@cmwc2027bogota.com';

// Default/fallback recipient. Most signup forms use $SIGNUP_EMAIL directly.
$TO_EMAIL = $SIGNUP_EMAIL;

// This appears in the email subject line.
$SITE_NAME = 'CMWC Bogotá 2027';

// Production domain for links and outgoing form email identity.
$SITE_DOMAIN = 'cmwc2027bogota.com';
$SITE_URL = 'https://cmwc2027bogota.com';

// IMPORTANT FOR ONE.COM:
// Keep this as an active email account on the cmwc2027bogota.com one.com account
// or change it to another active domain email address.
$FROM_EMAIL = 'signup@cmwc2027bogota.com';

// Paste the approved secure checkout URL here when your team provides it.
// Until then, rider receipts explicitly say payment instructions are pending.
$RIDER_PAYMENT_URL = '';
// Volunteer and sponsor applications get acknowledgments without asking them to pay.
// Optional: only turn these on once your team decides those applications require payment.
$VOLUNTEER_PAYMENT_URL = '';
$SPONSOR_PAYMENT_URL = '';

// Optional: keep CSV copies on the server inside /forms/data.
// The admin dashboard reads these CSV files.
$SAVE_CSV = true;
?>
