const fs = require('fs');
const rawdata=fs.readFileSync('dbuser.json');
const userInfo=JSON.parse(rawdata);
var mssql = require('mssql');
const express = require('express'); // import express
const app = express(); // initialize express// Listen on port 3000
const anime = require('./Models/Data.js'); // import data
const cors = require('cors'); // import cors package

// Enable all CORS requests
app.use(cors());

    // config for your database
    var config = {
      user: userInfo.user,
      password: userInfo.password,
      server: "localhost", 
      database: "tempdb"
  };
  mssql.connect(config, function (err) {
    
    if (err) console.log(err);
    else{
      console.log("Connected");
    }
  })

// GET route
app.get('/anime', function (req, res) {// store the query string parameter in cityName variable
  let animeName = req.query.name;
  var request = new mssql.Request();

  var queryString='SELECT * FROM tempdb WHERE aID=1!!';
      request.query(queryString,function (err, recordset) {
        console.log(recordset);
        res.send({"status": "error", "message": "This anime isn't in our database"})
      });
  /*for (let i = 0; i < anime.length; i++) {
    if (!animeName) {
      return res.send({"status": "error", "message": "Please enter a city name"})
    } else if (animeName == anime[i].Name) {
      return res.send(anime[i])
    }
  */}// if anime parameter isn't in our fake data set
  //res.send({"status": "error", "message": "This anime isn't in our database"})}
  );
app.listen(3000, function() {
  console.log('listening on port 3000...');
})