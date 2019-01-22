const express = require("express");
const loginRouter = require("./controllers/user_login");
const registerRouter = require("./controllers/user_registration");
const inventoryRouter = require("./controllers/user_inventory");
const adminRouter = require("./controllers/admin_panel");
const userManagementRouter = require("./controllers/user_management");

const app = express();

// Use routes
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", inventoryRouter);
app.use("/", adminRouter);
app.use("/", userManagementRouter);

app.set("view engine", "pug");

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
