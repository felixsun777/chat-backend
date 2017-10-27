var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var collection;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/local", function(err, db) {
    if(err) { return console.dir(err); }
    collection = db.collection('messages');
});

/* response to get method. */
router.get('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // collection.insert(message2);
    collection.find({}).toArray(function(err, docs) {
        if(err) { return console.dir(err); }
        res.jsonp(docs);
    });
});

/* response to options method. */
router.options('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin");
    res.jsonp({'result':'ok'});
});

/* response to post method. */
router.post('/', function(req, res, next) {
    var message = req.body;
    console.log(message);
    collection.insert(message);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.jsonp({'result':'ok'});
});

module.exports = router;
