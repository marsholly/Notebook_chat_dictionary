const express = require('express')
const router = express.Router();
const Note = require('../models/note')

//base url: /api/notes

router.put('/:id/toggle', (req, res) =>{
  Note.toggle(req.params.id, (err, savedNote) =>{
    if(err){
      return res.status(400).send(err);
    }
    Note.find({}, (err, notes) => {
      res.status(err ? 400: 200).send(err || notes);
    })
  });
})

router.route('/')
  .get((req, res) =>{
    Note.find({}, (err, notes) =>{
      res.status(err ? 400: 200).send(err || notes);
    });
  })
  .post((req, res)=>{
    Note.create(req.body, (err, newNote) => {
      if(err){
        return res.status(400).send(err);
      }
      Note.find({}, (err, notes) => {
        res.status(err ? 400: 200).send(err || notes);
      })
    });
  })

router.route('/:id')
  .get((req, res) =>{
    Note.findById(req.params.id, (err, note) =>{
      res.status(err ? 400 : 200).send(err || note);
    });
  })
  .delete((req, res) =>{
    Note.findByIdAndRemove(req.params.id, err =>{
      if(err){
        return res.status(400).send(err);
      }
      Note.find({}, (err, notes) => {
        res.status(err ? 400: 200).send(err || notes);
      })
    });
  })
  .put((req, res) =>{
    Note.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, note) =>{
      if(err){
        return res.status(400).send(err);
      }
      Note.find({}, (err, notes) => {
        res.status(err ? 400: 200).send(err || notes);
      })
    });
  })

module.exports = router;
