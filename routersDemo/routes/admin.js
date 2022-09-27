const express = require("express");
// const app = express();

const router = express.Router();

// By including ?isAdmin=true on the query, we will
//be granted access!
router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("YOU ARE NOT AN ADMIN");
});

router.get("/topsecret", (req, res) => {
  res.send("ONLY THE ADMIN CAN SEE THIS");
});
router.get("/codered", (req, res) => {
  res.send("EXECUTING CODE RED PROTOCOL");
});

module.exports = router;
