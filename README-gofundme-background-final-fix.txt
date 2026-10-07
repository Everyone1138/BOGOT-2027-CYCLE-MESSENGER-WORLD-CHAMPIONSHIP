GOFUNDME BACKGROUND FINAL FIX

I changed the GoFundMe background slideshow to use real <img> tags and pure CSS animation.
This means it no longer depends on JavaScript to appear.

If it is still black after replacing files:
1. Make sure you copy the entire images folder, not only index.html/style.css/script.js.
2. Confirm these files exist:
   images/Imagen_1.png
   images/Imagen_2.jpg
   images/Imagen_3.jpg
   images/Imagen_7.jpg
   images/Imagen_8.jpg
3. Hard refresh with Ctrl + Shift + R.
4. In the browser, right-click the black area > Inspect. Check if the <img class="gofundme-bg-img"> elements appear inside #gofundme-bg-slideshow.
