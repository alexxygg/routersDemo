const express = require("express");
// const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("ALL SHELTERS");
});
router.post("/", (req, res) => {
  res.send("CREATING SHELTER");
});
router.get("/:id", (req, res) => {
  res.send("SHELTER DETAILS");
});
router.get("/:id/edit", (req, res) => {
  res.send("EDIT SHELTER");
});

module.exports = router;
