const fs = require('fs');
const rawdata=fs.readFileSync('dbuser.json');
const userInfo=JSON.parse(rawdata);
var mssql = require('mssql');
const express = require('express'); // import express
const app = express(); // initialize express
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
app.get('/anime', function (req, res) {
  // store the query string parameter in animeName variable
  let animeName = req.query.name;
  var request = new mssql.Request();
  var queryString=`SELECT * FROM Anime WHERE aName= '${animeName}'`; //Template literal example.
  //console.log("QUERYING: "+queryString);
      request.query(queryString,function (err, results) {

        if(results==null){
          res.send({"status": "error", "message": "This anime isn't in our database"})
        }
        else{
          res.send(results.recordset[0]);
          console.log(results.recordset[0]);
        }

      });
    }
  );
app.listen(3000, function() {
  console.log('listening on port 3000...');
})