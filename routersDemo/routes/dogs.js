const express = require("express");
// const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("ALL DOGS");
});
router.post("/", (req, res) => {
  res.send("ADDING NEW DOG");
});
router.get("/:id", (req, res) => {
  res.send("DOG DETAILS");
});
router.get("/:id/edit", (req, res) => {
  res.send("EDIT DOG");
});

module.exports = router;
