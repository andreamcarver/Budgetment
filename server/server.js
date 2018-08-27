const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const PORT = 8080;
const dbConnection = require("./database");
const user = require("./routes/user");

// Sessions
app.use(
  session({
    secret: "ocelot",
    resave: false,
    saveUninitialized: false
  })
);

app.use((req, rest, next)) => {
    console.log('req.session', req.session);
    return next()
}

// Routes
app.use("/user", user);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: 8080`);
});
