var express = require('express');
var router = express.Router();

/*
Breakout #1
get all christmas tracks and render them into a pug view
 */
router.get('/christmastracks', async function (req,res) {
    // TODO if your database does not contain the christmas track collection from the tutorial yet, see the tutorial 8 appendix slides for how to import the data
    const db = req.db;
    const tracks = db.get('tracks');
   ;
    // TODO extend the find tracks query by filtering
    // tracks.find({},{'artists.name': 1, '_id':0}).then(docs => {
    //     const realArtistsData = docs;
    //     console.log("1:"+realArtistsData);
    //     res.render('music', {tracks: docs, artists: realArtistsData})
    //     //return realArtistsData;
    // });
   // console.log("2:"+realArtistsData);

     const realArtistsData = await tracks.find({},{"artists.name": 1,"_id": 0})
     const allData = await tracks.find()
   
    //const realArtistsDataPre = tracks.find({},{'artists.name': 1, '_id':0});
  //  const realArtistsData = await Promise.all(realArtistsDataPre);
   // const allDataPre = tracks.find();
   // const allData = await Promise.all(allDataPre);
    console.log(realArtistsData);
    console.log(realArtistsData[0].artists[0].name);
    //console.log(allData);
    res.render('music', {tracks: allData, artists: realArtistsData})

    
    // tracks.find().then(docs =>{
    //     let realArtistsData =  tracks.find({},{'artists.name': 1, '_id':0});
    //     // TODO replace this mocked artists data with real artists from the database
    //     //console.log(docs);
        


    //    console.log("3:"+tracks.find({},{'artists.name': 1, '_id':0}));
    //     const mockedArtistsData = [
    //         {name:'Wham!'},{name:'Shakin Stevens'},{name: 'Michael Bublé'}
    //     ]
    //       res.render('music', {tracks: docs, artists: realArtistsData})

    //   }).catch(e => {
    //       console.error(e);
    //       res.status(500).send();
    // });
});

/*
Breakout #2:
calling this with query parameter trackname increases the track's popularity by 5 which each call
The updated track will be rendered
 */
router.post('/updatepopularity', (req,res) => {
   const db = req.db;
   const tracks = db.get('tracks');

   const trackname = req.query.trackname;

   tracks.findOneAndUpdate({name:trackname},{$inc: {popularity: 5}}).then(updatedDoc => {
       res.render('music', {tracks: [updatedDoc]})
   }).catch(e => {
       console.error(e);
       res.status(500).send();
   });
});


//have to throughout index.html to get searchname server.
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
