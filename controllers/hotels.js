// var MongoClient = require('mongodb').MongoClient;
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const Hotels = require('../models/Hotels');
// module.exports = function () {
//   myModel;
// };
// var MyModel = mongoose.model('hotels')
// var promise = require('bluebird');



exports.index = (req, res) => {
  res.render('hotels', {
    title: 'Hotels'
  });
};

 

exports.hotels = (req, res) => {
    return Promise.resolve()
    .then(function(db){
        return Hotels.findOne({}).lean().exec()
    })
    .then((result)=>{
        var hotel = [];
        hotel = result;
        return res.render('hotels', { hotel });
    })
    .catch(function(err) {});
}


 





    
   
