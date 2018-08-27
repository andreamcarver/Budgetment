const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const session = require("express-session");

const MongoStore = require("connect-mongo")(session);

const PORT = 8080;
const dbConnection = require("./database");
const user = require("./routes/user");
const passport = require("./passport");
// Sessions
app.use(
  session({
    secret: "ocelot",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: dbConnection })
  })
);

//Passport
app.use(passport.initialize());

app.use(passport.session()); // calls the deserializeUser

app.use((req, res, next) => {
  console.log("req.session", req.session);
  return next();
});

// Routes
app.use("/user", user);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: 8080`);
});
