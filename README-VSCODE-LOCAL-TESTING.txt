VS CODE LOCAL TESTING

This version works in two modes:

1) LOCAL VS CODE PREVIEW MODE
Use this when testing on your computer before uploading to one.com.

Recommended:
- Open this folder in VS Code.
- Install/use the Live Server extension.
- Right-click index.html -> Open with Live Server.
- The site opens at a localhost address.

In local preview mode:
- The public site works normally.
- Rider, volunteer, and sponsor form submissions are saved in your browser localStorage.
- The footer ADMIN LOGIN button points to admin/local-login.html.
- Local admin login:
  Username: admin
  Password: ChangeMe2027!
- The local dashboard shows local test submissions and local page traffic only.

Important: local preview data is only on your computer/browser. It is not the real one.com server data.

2) LIVE ONE.COM MODE
When uploaded to cmwc2027bogota.com:
- The same footer ADMIN LOGIN button points to admin/login.php.
- PHP saves the real CSV files in forms/data/.
- The real admin dashboard reads the real server CSV files.
- The real login is still:
  Username: admin
  Password: ChangeMe2027!

Change the live password before public launch.

DO NOT upload only index.html. Upload all folders:
images/
images/sponsors/
images/original-uploads/
Manuel Rodriguez/
DIEGOSOSA/
IVANNIETO/
videos/
forms/
admin/
