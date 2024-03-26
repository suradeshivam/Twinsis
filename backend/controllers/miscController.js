const multer = require("multer");
const PDF = require("../models/pdfModel");

const uploadPdf = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const title = req.body.title;
  const filename = req.file.filename;
  try {
    await PDF.create({ title: title, pdf: filename });
    res.json({
      status: "ok",
    });
  } catch (error) {
    res.json({
      error: error.message,
      success: false,
    });
  }
};

const getFiles = async (req, res) => {
  try {
    const data = await PDF.find().then((data) => {
      res.status(200).json({
        success: true,
        data,
      });
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { uploadPdf, getFiles };
