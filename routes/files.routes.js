const express = require('express');
const router = express.Router();
var multer  =   require('multer');

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './routes/uploads');
    },
    filename: function (req, file, callback) {
        console.log(file);
      callback(null, file.originalname);
    }
});
  
var upload = multer({ storage : storage}).single('userPhoto');
  
router.get('/:file',function(req,res){
    const file = req.params.file;
    res.sendFile(__dirname + "/uploads/"+file);
});
  
router.post('/api/photo',function(req,res){
upload(req,res,function(err) {
    if(err) {
        console.log(err);
        return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
    });
});

module.exports = router;