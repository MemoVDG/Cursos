const sharp = require('sharp');

sharp('original.jpg')
    .resize(80)
    .grayscale()
    .toFile('resize.jpg')