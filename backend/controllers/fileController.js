// controllers/fileController.js

const multer = require('multer');
const moment = require("moment");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    }
});

const upload = multer({ storage: storage });

const fileUpload = (req, res) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            return res.send({ status: "error", message: "File upload failed", error: err });
        }
        console.log(req.file);
        return res.send({ status: "success", message: `${req.file.originalname} uploaded!` });
    });
};

module.exports = {
    fileUpload
};
