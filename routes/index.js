var express = require('express');
var router = express.Router();

// var mongodb = require('mongodb');
// var mongourl = 'mongodb://';

var lang = "en"
/* GET home page. */
router.get('/', function(req, res, next) {
  // var MongoClient = mongodb.MongoClient;
  // MongoClient.connect(mongourl, function(err, db){
  //   if (err) {
  //     console.log('Unable to connect to the server', err);
  //   } else {
  //     console.log('Connected successfully');
  //     var collection = db.collection('employees');
  //     collection.find({}).toArray(function(err, result){
  //       if (err) {
  //         res.send(err);
  //       } else if (result.length) {
  //         res.render('index', {
  //           "lang": lang,
  //           "employees": result
  //         });
  //       } else {
  //         res.send('No documents found');
  //       }
  //       db.close();
  //     });
  //   }
  // })
  res.render('index', {});
});

// config interface for updating the database (WIP)
router.get('/config', function(req, res){
  res.render('config', {});
});

// post url for updating the database (WIP)
router.post('/updatedb', function(req, res, next) {
  // var MongoClient = mongodb.MongoClient;
  // MongoClient.connect(mongourl, function(err, db){
  //   if (err) {
  //     console.log('Unable to connect to the server', err);
  //   } else {
  //     console.log('Connected successfully');
  //     var collection = db.collection('employees');
  //
  //     newEmpData = {name: req.body.name}
  //     collection.insert([newEmpData]).toArray(function(err, result){
  //       if (err) {
  //         res.send(err);
  //       } else if (result.length) {
  //         res.send('Successfully updated')
  //       } else {
  //         res.send('Nothing was posted');
  //       }
  //       db.close();
  //     });
  //   }
  // })
});

module.exports = router;
