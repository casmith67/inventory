const express = require("express");
const router = require("./controllers/user_login");
const router2 = require("./controllers/user_registration");
const router3 = require("./controllers/inventory");
const path = require("path");
const login = require("./models/login");

const app = express();

// Use routes
app.use("/", router);
app.use("/", router2);
app.use("/", router3);

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});

app.listen(3000);
