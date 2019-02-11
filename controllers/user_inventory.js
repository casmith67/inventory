const express = require("express");
const inventory = require("../models/inventory");
const addItem = require('../models/addItem')
const bodyParser = require('body-parser')

const router = express.Router();

router.all("/", bodyParser.urlencoded());

router.use(bodyParser.json())

router.get("/user/:id/inventory", (req, res) => {

  if (req.session.loggedIn) {
    inventory.getSupplies((err, result) => {
      if (err) throw err;

      res.render('inventory', {
        supplies: result,
        id: req.params.id
      })
    })
  } else {
    res.send("You do not have access to this page.");
  }

});

router.post('/user/addInventoryItem', (req, res) => {
  // Send office supplies to user's browser
  addItem.updateInventory(req.body.supplyName, req.body.description, req.body.quantity, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.render('inventory', {
        supplies: inventory.getSupplies(),
        id: req.params.id
      })
    }
  })

})

module.exports = router;
