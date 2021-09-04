//This file collect the packaged API routes.
const router = require("express").Router();

const apiRoutes = require("./api");

const homeRoutes = require("./home-routes.js");

router.use("/api", apiRoutes);

router.use("/", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
