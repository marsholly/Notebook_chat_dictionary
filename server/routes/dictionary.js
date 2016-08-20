const express = require('express')
const router = express.Router();
const diction = require('../models/diction')

router.route('/:word')
  .get((req, res) =>{
    diction(req.params.word, (err, wordObj) => {
      res.send(wordObj)
    })
  })

module.exports = router;
