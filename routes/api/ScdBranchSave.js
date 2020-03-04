const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/ScdBranch.js');

// @route   POST api/items
// @des     Create an Item
// @access  Public 


router.route('/ScdBranch').post(function (req, res) {
    let form = new Item(req.body);
    form.save()
      .then(form => {
        res.status(200).json({'form': 'form in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.Item 
    });
    newItem.save().then(item => res.json(item))
});


// @route   GET api/items
// @des     Get All Items
// @access  Public 

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items));
});
router
module.exports = router;