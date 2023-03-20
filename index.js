const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// register routes
require("./routes")(app);

// register error handling middleware
app.use((err, req, res, next) => {
  if (err.status === undefined) {
    return res.status(500).send(err.message);
  } else {
    return res.status(err.status).send(err.message);
  }
});

// launch server
const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://localhost:%s", port);
});

module.exports = app;
