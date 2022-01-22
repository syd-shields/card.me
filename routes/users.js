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

  router.get('/id/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
  })

  router.put('/:id', async (req, res) => {
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