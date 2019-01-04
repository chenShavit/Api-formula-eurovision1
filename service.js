const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

const sendError = require("./routes/error");

const router_points= require('./routes/points');

const router_flags= require('./routes/flags');


const PORT = process.env.PORT || 8000;

function startService(){
  mongoose.connect("mongodb://shaked:Shaked1234@ds119024.mlab.com:19024/eurovision",function(err){
    if(err){
      console.log(err)
    }
    else{
    console.log("connected to mLab");
    }
  });


  app.use(express.static("."));
  app.use(bodyParser.json());       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  app.use(bodyParser.raw());

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

  app.use('/points', router_points);
  app.use('/flags', router_flags);
  app.use('/api/', express.static(__dirname + '/webApidoc'));
  app.all('/*', function(req, res) {
      return sendError(res, "404 not found");
  });

  http.createServer(app).listen(PORT);
  console.log(`Listening on port ${PORT}`);
}

module.exports = {
  startService
}
