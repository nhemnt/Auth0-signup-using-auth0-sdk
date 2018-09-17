const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res,next){
    res.send("Signup api is working");
});

app.post('/',function(req,res,next){
    let user= req.body;
    const firstName= user.firstName;
    const lastName= user.lastName;
    const email = user.email;
    const password= user.password;

    let options = { method: 'POST',
  url: process.env.url,
  headers: { 'content-type': 'application/json' },
  body:
   { client_id: process.env.clientId,
     email: email,
     password: password,
     connection: 'Username-Password-Authentication',
     user_metadata: { name: firstName, lastName: lastName } },
  json: true };

request(options, function (error, response, body) {
  if (error) {
      res.send(err);
      throw new Error(error);
  }
  console.log(body);
  res.json(body);
});
});

app.listen(3000,function(){
    console.log("api is running on 3000 port");
})
