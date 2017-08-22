const path = require('path');
let express = require('express');
let mongo = require('mongodb').MongoClient;
let app = express();
let connectionURL ='mongodb://localhost:27017/users';
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.use(express.static(__dirname + '/css'));
// fs.readFile('users.json',  function (err, data) {
//   robots = JSON.parse(data);
  // console.log(robots);
// });

mongo.connect(connectionURL, function(err, db) {
  let robots = db.collection('robots');
  console.log("Connected correctly to the server");

  app.get('/users', function(req, res) {
    // fs.readFile('users.json',  function (err, data) {
 robots.find().toArray().then(function (data) {
   console.log(data);
  res.render('index', {
    people : data,
  });
})

  });
  app.get('/looking', function(req, res) {
    // fs.readFile('users.json',  function (err, data) {
 robots.find({"job": null}).toArray().then(function (data) {
   console.log(data);
  res.render('lookingforwork', {
    people : data,
  });
})


  });

  app.listen(3000, function () {
    console.log('Successfully started express application!');
  });
});
