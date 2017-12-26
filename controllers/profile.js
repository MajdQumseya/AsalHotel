// var MongoClient = require('mongodb').MongoClient;
Promise = require('bluebird');
const mongoose = require('mongoose');
const Hotels = require('../models/Hotels');


// global.Promise = require('bluebird');



exports.index = (req, res) => {
  res.render('profile', {
    title: 'Profile'
  });
};

exports.profile = (req, res) => {
    return Promise.resolve()
    .then(function(db){
        return Hotels.findOne({}).lean().exec()
    })
    .then((result)=>{
        var hotel = [];
        hotel = result;
        return res.render('profile', { hotel });
    })
    .catch(function(err) {});
}
