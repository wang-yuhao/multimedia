var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
/*
Breakout #1
get all christmas tracks and render them into a pug view
 */
router.get('/christmastracks', function (req,res) {
    const db = req.db;
    const tracks = db.get('tracks');
   // console.log("");
    //albums.find({artists:{$elemMatch:{name:"Queen"}}
    tracks.find().then(docs =>{
          res.render('music', {tracks: docs});
         // console.log(docs);
      }).catch(e => {
          console.error(e);
          res.status(500).send();
    });
});

/*
Breakout #2:
calling this with query parameter trackname increases the track's popularity by 5 which each call
The updated track will be rendered
 */
router.get('/updatepopularity', (req,res) => {
   const db = req.db;
   const tracks = db.get('tracks');

  // const trackname = req.query.trackname;
   const trackname = "Pray For The Wicked";
   console.log(trackname);

   tracks.findOneAndUpdate({name:trackname},{$inc: {popularity: 5}}).then(updatedDoc => {
       res.render('music', {tracks: [updatedDoc]})
   }).catch(e => {
       console.error(e);
       res.status(500).send();
   });
});

router.post('/searchname',multipartMiddleware, (req,res) => {
    console.log(req.body);
    const db = req.db;
    const tracks = db.get('tracks');
 
   // const trackname = req.query.trackname;
   const trackname = req.body.fname;
   //const trackname = "Pray For The Wicked";
    console.log(trackname);
 
    tracks.find({$or: [{ 'album.name': trackname},{name: trackname}]})
        .then(docs => {
            console.log(docs);
        res.send(JSON.stringify(docs));
       // res.render('music', {tracks: docs});
    }).catch(e => {
        console.error(e);
        res.status(500).send();
    });
 });


module.exports = router;
