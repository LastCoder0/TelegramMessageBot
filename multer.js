const {v4 : uuidv4} =require('uuid');
const multer = require('multer');

const storage = multer.diskStorage({
     destination: function (req,file,cb) {
         cb(null,'./uploads/');
     },
     filename : function (req,file,cb) { 
        const uniquName = uuidv4();
        cb(null,file.fieldname+uniquName+file.originalname);
     },

});
const fileFilter =(req,file,cb) => {
    cb(null,true)
}
const upload = multer({ storage : storage,fileFilter:fileFilter }).single('file');

module.exports = upload;