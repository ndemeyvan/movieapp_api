var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  nom: String,
  prenom: String,
  telephone: String,
  mdp: String,
  createdDate: { type: Date, default: Date.now },
  like: Number,
});

module.exports = mongoose.model("users", usersSchema);
