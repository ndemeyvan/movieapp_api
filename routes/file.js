const express = require("express");
const router = express.Router();


router.get('/:img',(req,res)=>{
    let img = req.params.img;
    console.log(img)
    res.sendFile(img, { root: '../SevenVideoApi/uploads/videosImages' });
})
// /home/factor11/Documents/SevenVideoApi/uploads/videosImages
module.exports = router;