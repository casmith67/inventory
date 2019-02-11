const express = require("express");
const loginRouter = require("./controllers/user_login");
const registerRouter = require("./controllers/user_registration");
const inventoryRouter = require("./controllers/user_inventory");
const adminRouter = require("./controllers/admin_panel");
const userManagementRouter = require("./controllers/user_management");
const cors = require('cors')

const app = express();

// Use routes
app.use(express.static(__dirname));
app.use(cors());
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", inventoryRouter);
app.use("/", adminRouter);
app.use("/", userManagementRouter);
app.use('/style', express.static(__dirname + '/style'));
app.use('/scripts', express.static(__dirname + '/scripts'));

app.set("view engine", "pug");

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
