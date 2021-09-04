const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
//set up Handlebars.js as your app's template engine of choice:
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);
//set up Handlebars.js as your app's template engine of choice:
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on connection to database and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
