const express = require("express");
const app = express();

require("./routes/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 3900;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
