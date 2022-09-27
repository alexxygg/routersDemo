const express = require("express");
const mongoose = require("mongoose");

const app = express();

const shelterRoutes = require("./routes/shelters");
const dogsRoutes = require("./routes/dogs");

//The path prefix we include here will not be needed
//in our shelter routes!

//By leaving it empty, (Just /), we MUST include it on
//every single path in the paths file.

//If we were to include it on both parts, we would need
//to use /shelters/shelters followed by any additional path.

const adminRoutes = require("./routes/admin");

app.use("/admin", adminRoutes);

app.use("/shelters", shelterRoutes);

app.use("/dogs", dogsRoutes);

app.listen(3000, () => {
  console.log("APP LIVE AT PORT 3000");
});
