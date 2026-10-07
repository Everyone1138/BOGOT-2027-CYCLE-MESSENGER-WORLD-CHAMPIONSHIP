GOFUNDME BACKGROUND SLIDESHOW FIX

What changed:
- The GoFundMe section now uses a JavaScript-powered randomized background slideshow.
- It pulls random images from the existing images/ folder each time the page loads.
- The overlay was made lighter because the previous version could look completely black.

Files edited:
- index.html
- style.css
- script.js

To change which images appear:
Open script.js and search for: imagePaths
Then add/remove image paths from that list.

If changes do not show:
Use Ctrl + Shift + R for a hard refresh.
