let fs = require('fs');
const path = require('path');
let express = require('express');
let app = express();
let robots;

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.use(express.static(__dirname + '/css'));
fs.readFile('users.json',  function (err, data) {
  robots = JSON.parse(data);
  // console.log(robots);
});
app.get('/users', function(req, res){
  // fs.readFile('users.json',  function (err, data) {
  res.render('index.mustache', robots);
});

app.listen(3000, function () {
console.log('Successfully started express application!');
});
