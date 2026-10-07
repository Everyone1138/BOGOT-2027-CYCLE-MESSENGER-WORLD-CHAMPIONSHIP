ABOUT CAROUSEL EDITS

I updated the About section carousel in index.html and added more local-image slides.

To add another slide:
1. Open index.html.
2. Find: <div id="carousel" class="flex transition-transform duration-500 ease-in-out">
3. Copy one full <div class="min-w-full relative"> ... </div> slide block.
4. Change the img src, h3 title, and p text.
5. Save and hard refresh the browser with Ctrl + Shift + R.

Image paths must match your folders exactly. For this version, working paths look like:
images/Imagen_1.png
images/Imagen_8.jpg
images/Imagen_7.jpg

The JavaScript automatically counts slides and creates the dots.
