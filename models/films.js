var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var filmSchema = new Schema({
  titre: String,
  description: String,
  relisateur: String,
  dateDeSortie: Date,
  createdDate: { type: Date, default: Date.now },
  categories_id: {
    type: Object,
    required:true,
  },
  dateDeSortie: { type: Date, default: Date.now },
  like: String,
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