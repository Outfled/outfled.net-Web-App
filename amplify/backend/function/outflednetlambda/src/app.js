/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const axios = require('axios')
// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/api/clients', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/api/clients/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

function make_config(authorization_token) {
  data= {
    headers: {
      "authorization": 'Bearer ${authorization_token}'
    }
  };
  return data;
}

app.post('/api/clients', function(req, res) {
  const url = "https://discord.com/api/oauth2/authorize?client_id=1095068590769717418&redirect_uri=https%3A%2F%2F2flgrdlvoa.execute-api.us-east-2.amazonaws.com%2Fdev%2Fapi%2Fclients&response_type=code&scope=identify%20rpc%20activities.read%20activities.write%20rpc.activities.write";
  fetch('https://discord.com/api/oauth2/token', { method: "POST", body: url }).then(response => response.json()).then(data => {
    axios.get("https://discord.com/api/users/@me", make_config(data.access_token)).then(response => {
      res.status(200).send(response.data.username);
    });
  });
});

app.post('/api/clients/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/api/clients', function(req, res) {
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/api/clients/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/api/clients', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/api/clients/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
