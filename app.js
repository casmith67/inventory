const express = require("express");
const router = require("./controllers/user_login");
const router2 = require("./controllers/user_registration");
const path = require("path");
const login = require("./models/login");

const app = express();

// Use routes
app.use("/", router);
app.use("/", router2);

// Home page
app.get("/", login.isUserLoggedIn, (req, res) => {
  console.log("Home " + req.session.loggedIn);
});

app.listen(3000);
