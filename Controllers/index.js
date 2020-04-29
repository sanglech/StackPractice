const fs = require('fs');
const rawdata=fs.readFileSync('../Models/dbuser.json');
const userInfo=JSON.parse(rawdata);
var mysql = require('mysql');
const express = require('express'); // import express
const app = express(); // initialize express
const anime = require('../Models/Data.js'); // import data
const cors = require('cors'); // import cors package

// Enable all CORS requests
app.use(cors());

    // config for your database
    var con = mysql.createConnection({
      user: userInfo.user,
      password: userInfo.password,
      host: "localhost", 
      database: "tempdb"
  });
  con.connect(function (err) {
    if (err) console.log(err);
    else{
      console.log("Connected");
    }
  })

// GET route
app.get('/anime', function (req, res) {
  // store the query string parameter in animeName variable
  let animeName = req.query.name;
  var queryString=`SELECT * FROM Anime WHERE aName= '${animeName}'`; //Template literal example.
  //console.log("QUERYING: "+queryString);
      con.query(queryString,function (err, results) {
        //console.log("RESULTS "+JSON.stringify(results));
        if(results==null){
          res.send({"status": "error", "message": "This anime isn't in our database"})
        }
        else{
          res.send(results[0]);
          //console.log(results[0]);
        }

      });
    }
  );
app.listen(3000, function() {
  console.log('listening on port 3000...');
})