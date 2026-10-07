CMWC ONE.COM PHP FORM SETUP

This version connects the main Sign Up forms to PHP handlers for one.com.

What now works:
- Rider registration form -> forms/rider-signup.php
- Volunteer signup form -> forms/volunteer-signup.php
- Sponsor signup form -> forms/sponsor-signup.php
- Optional newsletter script -> forms/subscribe.php

Before uploading:
1. Open forms/config.php.
2. Confirm this line is the email you want submissions sent to:
   $TO_EMAIL = 'campos.santiago138@gmail.com';

Upload to one.com:
1. Log in to one.com File Manager or use FTP.
2. Upload all files and folders from this package into your website/public folder.
3. Make sure the forms/ folder is uploaded.
4. Visit your site in the browser and use Ctrl + Shift + R to hard refresh.

Test email:
Visit:
https://cmwc2027bogota.com/forms/test-mail.php

CSV backups:
If $SAVE_CSV is true in forms/config.php, submissions are also saved in:
forms/data/rider-signups.csv
forms/data/volunteer-signups.csv
forms/data/sponsor-applications.csv
forms/data/subscribers.csv

Important:
The forms send emails and save CSV backups. They are not payment forms. Keep GoFundMe/Eventbrite/Stripe/PayPal for money collection.
