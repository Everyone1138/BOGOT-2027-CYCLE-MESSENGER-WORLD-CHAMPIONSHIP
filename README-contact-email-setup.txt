CONTACT EMAIL SETUP FOR ONE.COM

Recipient email:
- Contact form messages are sent to: messengercmwcbogota2027@gmail.com
- This is configured in forms/config.php as $TO_EMAIL.

Important one.com requirement:
- one.com may require the From address to be an active email account on the cmwc2027bogota.com domain.
- This version uses no-reply@cmwc2027bogota.com as $FROM_EMAIL.
- In the one.com control panel, create no-reply@cmwc2027bogota.com or change $FROM_EMAIL to an active mailbox that exists on the domain.

Files added/changed:
- index.html: added Contact nav link and Contact section.
- script.js: added English/Spanish contact text and form submission handling.
- style.css: added Contact section styling.
- forms/contact.php: new PHP handler for the contact form.
- forms/config.php: recipient changed to messengercmwcbogota2027@gmail.com.
- forms/form-handler.php: fixed From email access inside the email sender function.

Testing:
1. Upload the full site to the web root.
2. Visit https://cmwc2027bogota.com/forms/test-mail.php
3. Check messengercmwcbogota2027@gmail.com, including Spam.
4. Submit the Contact form on the site.
5. CSV backups save to forms/data/contact-messages.csv if CSV saving is enabled.
