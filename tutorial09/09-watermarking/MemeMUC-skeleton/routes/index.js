// Dependencies
const express = require('express');
const router = express.Router();
const Jimp = require('jimp');
const path = require('path');
var fs = require('fs');

// Constants
const FONT_PATH = path.join(__dirname, '..', 'public', 'impact.fnt');
const IMAGE_BASE_PATH = path.join(__dirname, '..', 'public', 'images');

/**
 * Map of all available memes.
 * Maps from key/name to filepath in public/images
 */
const IMAGES = {
  boromir: 'boromir.png',
  doge: 'doge.jpg',
  raptor: 'raptor.jpg',
};

// Routes
/**
 * /memes - Returns a list of all available memes with name and link
 */
router.get('/memes', (req, res) => {
  res.json(Object.keys(IMAGES).map((key) => ({
    name: key,
    link: `/memes/${key}`,
    thumb:`/memes/${key}/thumb`,
  })));
});

router.get('/memes/:key/thumb',(req,res) => {
  const imageName = IMAGES[req.params['key']];
  console.log(imageName);
  if(!imageName){
    return next(); 
  }
  const imagePath = path.join(IMAGE_BASE_PATH,imageName);
  const imageOutPath = path.join(IMAGE_BASE_PATH,`${path.basename(imageName).split('.')[0]}_out${path.extname(imageName)}`);
  console.log(imageOutPath);
  if(fs.existsSync(imageOutPath)){
    res.sendFile(imageOutPath);
  }else{
    Jimp.read(imagePath)
      .then((img) => img.scale(0.25))
      .then((img) => img.writeAsync(imageOutPath))
      .then(() => res.sendFile(imageOutPath));
  }
})
/**
 * /memes/:key - Returns the image corresponding with a specified key, as generated meme
 * Parameters for the meme are passed as query parameters:
 * @param {string} text Text at the top
 * @param {string} text2 Text at the bottom
 * @param {string | number} x X-offset of the top text
 * @param {string | number} y Y-offset of the top text
 * @param {string | number} x2 X-offset of the bottom text
 * @param {string | number} y2 Y-offset of the bottom text
 */
router.get('/memes/:key', async (req, res, next) => {
  try {
    // Get the correct image from the IMAGES object
    const imageName = IMAGES[req.params['key']];

    // No meme found? Handle somewhere else!
    if (!imageName) {
      return next();
    }

    // Construct image paths
    const imagePath = path.join(IMAGE_BASE_PATH, imageName);
    const imageOutPath = path.join(
      IMAGE_BASE_PATH,
      `${path.basename(imageName).split('.')[0]}_out${path.extname(imageName)}`,
    );

      const {x,y,text,x2,y2,text2} = req.query;

    // TODO get all the query parameters


    // TODO read the image
    const img = await  Jimp.read(imagePath);/* TODO */;

    const font = await Jimp.loadFont(FONT_PATH);
      const image = {
        data:img.scale(2),
        width:img.getWidth(),
        height:img.getHeight(),

      }

      const upperCaption = {
        text: text || '',
        x: (image.width - Jimp.measureText(font,text || '')) / 2 + (parseInt(x) || 0),
        y: 50 + (parseInt(y) || 0),
      };

      const lowerCaption = {
        text:text2 || '',
        x: (image.width - Jimp.measureText(font, text2 || '')) / 2 + (parseInt(x2) || 0),
        y: (image.height - Jimp.measureTextHeight(font,text2 || '') - 50) + (parseInt(y2) || 0),
      };

    // TODO write the text onto the image, using .print(font, x-offset, y-offset, text)
    const imageWithText = image.data
      .print(font,upperCaption.x,upperCaption.y,upperCaption.text)
      .print(font, lowerCaption.x,lowerCaption.y,lowerCaption.text)

    // Write to output path
    await imageWithText.writeAsync(imageOutPath);

    // Send file to user
    res.sendFile(imageOutPath);
  } catch (err) {
    console.error(err);
    throw err;
  }
});

module.exports = router;
