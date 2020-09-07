const express = require("express");
const route = express.Router();
// we need the file system to delete the images.
// const fs = require("fs");
//all my controller
const admin = require("../controllers/Admin.js");

//multer config
const upload = require("../multer/storage.js");


//----- Films Request ----------//
route.post("/saveVideo", (req, res) => {
  //let multer manage the requests
  //which are passed to the upload function
  //by the main request.
  //the function if everything went right
  //will upload the file without cheking if already exists
  console.log("SaveRequest :", req.body);
  // ---------- MULTER UPLOAD FUNCTION -------------
  upload(req, res, function (err) {
    if (req.file == null || req.file == undefined || req.file == "") {
      res.redirect("/");
    } else {
      if (err) {
        console.log(err.message);
      } else {
        const data = {};
        data.titre = req.body.titre;
        data.description = req.body.description;
        data.relisateur = req.body.message;
        data.like = req.body.like;
        data.image = req.file.filename;
        data.video = req.body.video;
        data.categories_id = {
          id: req.body.categories_id,
          nom: req.body.category_name,
        };
        admin.saveVideos(res, data);
      }
    }
  });
});

route.get("/videos", (req, res) => {
  let id = req.params.platform_id;
  console.log(id);
  admin.getAllvideos(res);
});

route.get("/videos/:id", (req, res) => {
  let id = req.params.id;
  console.log("id :", id);
  admin.getVideosById(res, id);
});

route.delete("/videos/:id", (req, res) => {
  let id = req.params.id;
  console.log("id :", id);
  admin.deleteVideo(res, id);
});

route.put("/videos/:id", (req, res) => {
  let id = req.params.id;
  console.log("id :", id);
  const data = {};
  data.titre = req.body.titre;
  data.description = req.body.description;
  data.relisateur = req.body.message;
  data.like = req.body.like;
  data.image = req.file.filename;
  data.video = req.body.filename;
  data.categories_id = {
    id: req.body.categories_id,
    nom: req.body.category_name,
  };

  admin.updateVideos(res, data, id);
});

//----- Categories Request ----------//
route.post("/saveCategory", (req, res) => {
  console.log("SaveRequest :", req.body);
  const data = {};
  data.nom = req.body.nom;
  admin.saveCategory(res,data)
 
});

route.get("/categories", (req, res) => {
  let id = req.params.platform_id;
  console.log(id);
  admin.getAllcategories(res);
});

route.get("/categories/:id", (req, res) => {
  let id = req.params.id;
  console.log("id :", id);
  admin.getcategoryById(res, id);
});

route.delete("/categories/:id", (req, res) => {
  let id = req.params.id;
  console.log("id :", id);
  admin.deleteCategory(res, id);
});

route.put("/categories/:id", (req, res) => {
  let id = req.params.id;
  const data = {};
  data.nom = req.body.nom;
  console.log("id :", id);
  admin.updateCategory(res, data, id);
});

module.exports = route;
