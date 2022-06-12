const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use("/", require("./routes/pages"));
app.use("/blogs", require("./routes/blog"));

app.listen(port, () => {
  console.log(`Blog App Started at http://localhost:${port}`);
});
