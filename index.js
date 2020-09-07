const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//import the routes
const admin = require("./routes/admin.js");
const fileserver = require('./routes/file');
///end of importation

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//body parser for the params
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//admin Multer folder
app.use(express.static("./admin"));
//use the route
app.use("/admin", admin);
app.use('/file',fileserver);
app.set('public',"afsd")
//connect to mongodb
mongoose
  .connect(
    "mongodb://localhost/sevenVideo",
    { useNewUrlParser: true ,
    useUnifiedTopology: true }
  )
  .then(() => console.log("La connection a mongodb a ete etablie... "))
  .catch((e) => console.log("Error :", e));

// some midlewares
// app.use(express.json());

app.listen(3000, function () {
  console.log("le serveur est actif : http://localhost:3000");
});
