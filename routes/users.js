const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to Users");
});

module.exports = router;
