# Importing libs
from PIL import Image
import pytesseract

# Transforming image to string and printing it!
# print(pytesseract.image_to_string(Image.open('Capture d’écran du 
# 2024-06-13 13-24-36.png')))

crop_text = pytesseract.image_to_string(Image.open('images-043d.png'))

with open("output043d.txt", "a") as f:
 print(crop_text, file=f) ;
