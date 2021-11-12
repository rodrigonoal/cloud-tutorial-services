const express = require("express");
const { json } = require("express");
const routes = require("./routes");

const app = express();

app.use(json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
