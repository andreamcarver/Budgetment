const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const PORT = process.env.PORT || 8080;
const dbConnection = require("./database");
const user = require("./routes/user");
const api = require("./routes/api");
const passport = require("./passport");

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

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
  console.log(req.body);
  return next();
});

// Routes
app.use("/user", user); //user route
app.use("/api", api); //projects route (probably is redundant)

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
