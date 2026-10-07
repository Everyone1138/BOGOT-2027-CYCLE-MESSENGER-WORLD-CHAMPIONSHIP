CMWC2027BOGOTA.COM DEPLOYMENT NOTES

Only production-domain changes were added in this version:
- index.html now has canonical/OG/Twitter meta tags for https://cmwc2027bogota.com/
- forms/config.php now includes SITE_DOMAIN, SITE_URL, and FROM_EMAIL for cmwc2027bogota.com
- robots.txt and sitemap.xml were added
- .htaccess was added for index.html and canonical https/non-www redirect
- forms/data/.htaccess blocks direct browser access to CSV backups

Important upload rule:
Upload the CONTENTS of this folder to the web root for cmwc2027bogota.com. Do not upload only index.html and do not upload the zip file itself.

Required folders to keep:
images/
images/sponsors/
videos/
forms/
DIEGOSOSA/
IVANNIETO/

Test after upload:
https://cmwc2027bogota.com/
https://cmwc2027bogota.com/forms/test-mail.php

If the site redirects to HTTPS before SSL is active, edit .htaccess and temporarily comment out the RewriteRule lines.
