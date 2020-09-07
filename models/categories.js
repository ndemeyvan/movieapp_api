var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorieSchema = new Schema({
  name:  String,
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('categories',categorieSchema);