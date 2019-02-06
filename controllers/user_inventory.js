const express = require("express");
const bodyParser = require("body-parser");
const inventory = require("../models/inventory");

const router = express.Router();

router.all("/", bodyParser.urlencoded());

router.get("/user/:id/inventory", (req, res) => {
  if (req.session.loggedIn) {
    res.render("inventory", {
      supplies: inventory.grabSupplies(),
      id: req.params.id
    });
  } else {
    res.send("You do not have access to this page.");
  }
});

router.post('/user/:id/inventory', (req, res) => {
  console.log(req.body.quantity)
  function getItem() {
    let item = { 
      supplyName: req.body.supplyName,
      desc: req.body.description,
      quantity: req.body.quantity
    }
    
    inventory.updateSupplies(item.supplyName, item.desc, item.quantity)

    return item
  }

  res.render('inventory', {
    supplies: inventory.grabSupplies(),
    item: getItem().supplyName,
    id: req.params.id
  })
})

module.exports = router;
