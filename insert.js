let data = require('./data');
let connectionURL ='mongodb://localhost:27017/users';
let mongo = require('mongodb').MongoClient;
mongo.connect(connectionURL, function(err,db){
let robots = db.collection('robots');
  console.log("Connected correctly to the server");
  for (let i = 0; i< data.users.length; i++) {
  robots.insert(data.users[i]);

  }
  db.close();
})
