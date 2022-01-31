const router = require("express").Router();
const User = require("../models/User.js");


//get card by username
router.get('/card/:username', async (req, res) => {
    try{
        const username = await User.findOne(
            { username: req.params.username }
        );
        res.status(200).json(username);
    } catch (err) {
        res.status(500).json(err)
    }
  })

  router.post('/card', async (req, res) => {
    try{
        const newCard = new User({
            username: req.body.username,
                bio: req.body.bio,
                password: req.body.password,
                song: req.body.song,
                emoticon: req.body.emoticon,
                instagram: req.body.instagram,
                youtube: req.body.youtube,
                tiktok: req.body.tiktok,
                twitter: req.body.twitter,
                spotify: req.body.spotify,
                appleMusic: req.body.appleMusic,
                cardColour: req.body.cardColour
          });
          const card = await newCard.save();
          res.status(200).json(card);
          console.log("media created");
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
  })

  router.put('/card/:id', async (req, res) => {
    const username = req.body.username
      try { 
        const updatedUser = await User.findByIdAndUpdate((req.params.id), {
            username: username
        },
        {new: true}
        )
        res.status(200).json(updatedUser)
      } catch (err) {
          res.status(500).json(err)
      }
  })

  module.exports = router;