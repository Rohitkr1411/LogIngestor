const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

const LogModel = require('./models/logs'); // Import the Mongoose model

const mongoDB = require('./db.js')

mongoDB;

const logRoutes= require('./routers/logRouter')

  
  app.get('/', async (req, res) => {

    res.render("home.ejs");
});

app.use(logRoutes)



app.listen(PORT, () => {
    console.log(`Log ingestor listening on port ${PORT}`);
  });