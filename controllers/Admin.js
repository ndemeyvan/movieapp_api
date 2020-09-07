const Films = require("../models/films.js");
const Categories = require("../models/categories.js");



///VIDEOS
module.exports.saveVideos = (res,data) => {
  let films = new Films(data);
  films.save((err, doc) => {
    if (err) {
      console.log(err.message);
      res.send(err.message);
    } else {
      res.send(doc);
      console.log(doc);
    }
  });
};

module.exports.getAllvideos = (res) => {
  Films.find((err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json(doc);
    }
  });
};

module.exports.getVideosById = (res, id) => {
  Films.find({ _id: id }, (err, doc) => {
    if (err) {
      res.json({ message: err.message });
    } else {
      console.log(doc.image)
      res.sendFile(doc[0].image, { root: '../SevenVideoApi/uploads/videosImages' });
    }
  });
};

module.exports.deleteVideo = (res, id) => {
  Films.findByIdAndDelete({ _id: id }, (err, doc) => {
    if (err) {
      res.json({ message: err.message });
    } else {
      res.json(doc);
    }
  });
};


//update a video
module.exports.updateVideos = (res,data,id) => {
  console.log("data :",data)
  Categories.findByIdAndUpdate(id, data ,(err, doc) => {
  if (err) {
    res.json({ message: err.message });
  } else {
    res.json(doc);
  }
});
};


///CATEGORIES

module.exports.saveCategory = (res,data) => {
  let category = new Categories(data);
  category.save((err, doc) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send(doc);
      console.log(doc);
    }
  });
};

  module.exports.getAllcategories = (res) => {
    Categories.find((err, doc) => {
      if (err) {
        res.json(false);
      } else {
        res.json(doc);
      }
    });
  };
  
  module.exports.getcategoryById = (res, id) => {
    Categories.find({ _id: id }, (err, doc) => {
      if (err) {
        res.json({ message: err.message });
      } else {
        res.json(doc);
      }
    });
  };
  
  module.exports.deleteCategory = (res, id) => {
    Categories.findByIdAndDelete({ _id: id }, (err, doc) => {
      if (err) {
        res.json({ message: err.message });
      } else {
        res.json(doc);
      }
    });
  };


//update a video
module.exports.updateCategory = (res,data,id) => {
  console.log("data :",data)
    Categories.findByIdAndUpdate(id, data ,(err, doc) => {
    if (err) {
      res.json({ message: err.message });
    } else {
      res.json(doc);
    }
  });
  
};
