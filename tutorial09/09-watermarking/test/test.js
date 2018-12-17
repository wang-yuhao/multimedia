const path = require('path');
const Jimp = require('jimp');
const folder = './';
const photoName = 'example_image_ts.jpg';
const watermarkName = 'watermark.png';
const photoPath = path.join(__dirname, folder, photoName);
const watermarkPath = path.join(__dirname, folder, watermarkName);
const suffix = '_watermarked';
const outputPath = path.join(__dirname, folder, photoName.extend(suffix));
Jimp.read(watermarkPath, (err, watermark) => {
Jimp.read(photoPath, (err, img) => {
const [ x, y ] = [ 0, 0 ];
img.composite(watermark, x, y)
.write(outputPath);
console.info('done!'); });
});