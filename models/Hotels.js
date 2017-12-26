const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  available: Boolean,
  hotelFeatures: Array,
  room: Array,
  src: String,
  price: Number,
}, { timestamps: true });


const Hotels = mongoose.model('Hotels', hotelSchema);

module.exports = Hotels;