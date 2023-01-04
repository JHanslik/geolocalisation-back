const express = require("express");
const app = express();
const port = 5000;
const toiletsRoutes = require("./routes/toilets");

require("./models");

app.use(express.json());

app.use("/toilets", toiletsRoutes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
