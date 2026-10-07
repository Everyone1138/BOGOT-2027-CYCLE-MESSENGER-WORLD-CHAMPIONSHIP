LOCAL RESOURCE FIX

What was fixed:
- Added local fallback CSS for the Tailwind utility classes used by the site. If the Tailwind CDN fails, the layout should no longer collapse.
- Added safety checks for Lucide icons and Leaflet map so a CDN failure does not stop script.js.
- Replaced external static.photos gallery images with local images from the images/ folder.
- Added simple local fallback social icon text if Font Awesome is unavailable.

Why the site looked broken:
The page used several external CDN resources. The most important one was Tailwind CSS. If that resource fails, utility classes like flex, grid, px-4, h-[400px], hidden, md:flex, object-cover, etc. stop working, which makes images and sections look out of place.

After replacing files, hard refresh with Ctrl + Shift + R.
