var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var filmSchema = new Schema({
  title: String,
  description: String,
  realisator: String,
  createdDate: { type: Date, default: Date.now },
  category_id: {
    type: String,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  outDate: { type: Date, default: Date.now },
  likes: String,
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("films", filmSchema);


// var image = {
//   titre: String,
//   description: String,
//   relisateur: String,
//   dateDeSortie: Date,
//   createdDate: { type: Date, default: Date.now },
//   categories_id: mongoose.Schema.Types.ObjectId,
//   dateDeSortie: { type: Date, default: Date.now },
//   like: Number,
//   image: {
//     type: String,
//     required: true,
//   },
//   video: {
//     type: String,
//     required: true,
//   },
// }