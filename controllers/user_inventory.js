const express = require("express");
const inventory = require("../models/inventory");
const addItem = require('../models/addItem')
const removeItem = require('../models/removeItem')
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

  let supplyName = req.body.supplyName;
  // Send office supplies to user's browser
  addItem.updateInventory((err, result) => {
    if (err) {
      console.log(err)
    } else {
      inventory.getSupplies((err, result) => {
        res.render('inventory', {
          supplies: result
        })
      })
    }
  }, supplyName, req.body.description, req.body.quantity)

})

router.post('/inventory/removeItem', (req, res) => {

  let item_number = req.body.item_number;
  removeItem.removeItem((err, result) => {
    if (err) console.log(err);
    inventory.getSupplies((err, result) => {
      res.render('inventory', {
        supplies: result
      })
    })
  }, item_number)

})

module.exports = router;
