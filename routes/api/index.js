//This file, like index.js in the models folder,
//will serve as a means to collect all of the API
//routes and package them up for us.
const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
