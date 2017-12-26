// var MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');
const Hotels = require('../models/Hotels');

//ask
// global.Promise = require('bluebird');
Promise = require('bluebird');



exports.index = (req, res) => {
  res.render('hotel_template', {
    title: 'Hotel Template'
  });
};

exports.template = (req, res) => {
    var id = req.params.id; 
    return Promise.resolve()
    .then(function(db){
        return Hotels.findOne({}).lean().exec()
    })
    .then((result)=>{
        console.log(req.params.id);
        var hotel = [];
        hotel = result[req.params.id];
        return res.render('hotel_template', { hotel });
    })
    .catch(function(err) {console.log("asd ", err)});
    
}

