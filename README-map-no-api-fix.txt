API-FREE MAP FIX

What changed:
- Removed the Leaflet/CDN dependency for the signup map.
- The map is now a local, API-free JavaScript/CSS map, so it does not need Google Maps, Mapbox, Leaflet, or external map tiles.
- Added forms/public-signup-stats.php, which reads forms/data/rider-signups.csv and returns only country counts.
- The public map does not expose names, emails, IPs, or other private signup details.

Upload notes for one.com:
- Upload index.html, style.css, script.js, forms/, admin/, images/, videos/, DIEGOSOSA/, and IVANNIETO/.
- Make sure forms/public-signup-stats.php is uploaded.
- After uploading, test: https://cmwc2027bogota.com/forms/public-signup-stats.php
  It should return JSON like {"ok":true,"total":0,"countries":{}} before there are signups.

Why this is safer:
- External map tile/CDN resources can fail, be blocked, or require usage limits.
- This version keeps the map working with the files hosted on one.com.
