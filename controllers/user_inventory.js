const express = require("express");
const inventory = require("../models/inventory");
const addItem = require('../models/addItem')
const editItem = require('../models/editItem')
const removeItem = require('../models/removeItem')
const bodyParser = require('body-parser')

const router = express.Router();

router.all("/", bodyParser.urlencoded());

router.use(bodyParser.json())

function getSupplies(res) {
  inventory.getSupplies((err, result) => {
    res.render('inventory', {
      supplies: result
    })
  })
}

router.get("/user/:id/inventory", (req, res) => {

  if (req.session.loggedIn) {
    getSupplies(res)
  } else {
    res.send("You do not have access to this page.");
  }

});

router.post('/inventory/addInventoryItem', (req, res) => {
  let itemNumber = req.body.itemNumber;
  let itemExists = false;

  inventory.getSupplies((err, result) => {
    for (let i = 0; i < result.length; i++) {
      // Does the entered item number match something in the database?
      if (result[i].item_number == itemNumber) {
        itemExists = true;
        res.render('inventory', {
          supplies: result,
          itemExists: true
        })
      }
    }
  })

  // Send office supplies to user's browser
  addItem.updateInventory((err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("REEEE")
      console.log(itemExists);
      getSupplies(res);
    }
  }, req.body.itemNumber, req.body.supplyName, req.body.description, req.body.quantity)

})

router.post('/inventory/editInventoryItem', (req, res) => {
  let itemNumber = req.body.itemNumber;

  editItem.editInventory((err, result) => {
    if (err) {
      console.log(err)
    } else {
      getSupplies(res);
    }
  })

})

router.post('/inventory/removeInventoryItem', (req, res) => {

  let item_number = req.body.item_number;
  removeItem.removeItem((err, result) => {
    if (err) console.log(err);
    getSupplies(res);
  }, item_number)

})

module.exports = router;
