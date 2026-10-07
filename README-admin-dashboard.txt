CMWC ADMIN DASHBOARD

What this version adds:
- Signup form emails now go to signup@cmwc2027bogota.com.
- Contact form emails still go to messengercmwcbogota2027@gmail.com.
- Rider, volunteer, sponsor, contact, and subscriber submissions are saved as CSV files in forms/data/.
- A footer "Admin Login" link was added.
- Admin dashboard location: https://cmwc2027bogota.com/admin/login.php

Default admin login:
Username: admin
Password: ChangeMe2027!

IMPORTANT: Change the admin password before sharing the live site.

How to change admin password:
1. Upload the site to one.com.
2. Visit: https://cmwc2027bogota.com/admin/make-password-hash.php
3. Type a new password and generate the hash.
4. Open admin/config.php and replace the value of $ADMIN_PASSWORD_HASH with the new hash.
5. Upload the changed admin/config.php.
6. Delete admin/make-password-hash.php from the server for safety.

Where submissions are stored:
- forms/data/rider-signups.csv
- forms/data/volunteer-signups.csv
- forms/data/sponsor-applications.csv
- forms/data/contact-messages.csv
- forms/data/subscribers.csv

The forms/data folder includes .htaccess to block direct browser access.
The admin dashboard reads the CSV files after login.
