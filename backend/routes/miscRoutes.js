const multer = require("multer");
const express = require("express");
const { uploadPdf, getFiles } = require("../controllers/miscController");

const router = express.Router();

console.log(1);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1000);
    console.log(uniqueSuffix);
    cb(null, uniqueSuffix + file.originalname);
    console.log("this is files original name : " + file.originalname);
  },
});
console.log(2);
const upload = multer({ storage: storage });

router.route("/upload").post(upload.single("file"), uploadPdf);
router.route("/").get(getFiles);

module.exports = router;
