// index.js

const serverless = require('serverless-http');
const express = require('express')
const app = express()




// new code - begin

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

var AWS = require('aws-sdk');
AWS.config.update({
  region: 'localhost',
  // region: "us-west-2",
  endpoint: "http://localhost:8000"
});

app.get('/', function (req, res) {
  doGetOperation(req, res);
})

app.post('/', function (req, res) {
  doPutOperation(req, res);
})



function doGetOperation(req, res) {

  console.log("*** req.query.email", req.query.email);


  var docClient = new AWS.DynamoDB.DocumentClient()
  var table1 = "usersTable";
  var email1 = req.query.email;

  var params = {
      TableName: table1,
      Key: {
        "email": email1
      }
  };

  docClient.get(params, function(err, data) {
      if (err) {
          let result =  "Unable to read item. Error JSON:" + JSON.stringify(err, null, 2);

          console.error(result);
          res.send(result)
      } else {
          let result = "GetItem succeeded:" + JSON.stringify(data, null, 2);

          console.log(result);
          res.send(result)
      }
  });
}

function doPutOperation(req, res) {

  console.log("*** req.body.email", req.body.email);

  var docClient = new AWS.DynamoDB.DocumentClient();
  var table1 = "usersTable";
  var email1 = req.body.email;

  var params = {
      TableName: table1,
      Item:{
          "email": email1
      }
  };

  console.log("Adding a new item...");
  docClient.put(params, function(err, data) {
      if (err) {
          let result = "Unable to add item. Error JSON: " + JSON.stringify(err, null, 2);

          console.error(result);
          res.send(result)
        } else {
          let result = "Added item: " + JSON.stringify(data, null, 2);

          console.log(result);
          res.send(result)
        }
  });
}

// function dummy() {
//
//   new AWS.DynamoDB.DocumentClient({
//     region: 'localhost',
//     endpoint: 'http://localhost:8000'
//   })
//
//   new AWS.DynamoDB({
//     region: 'localhost',
//     endpoint: 'http://localhost:8000'
//   })
//
// }

// new code - end





module.exports.handler = serverless(app);
