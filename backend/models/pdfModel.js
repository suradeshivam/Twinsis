const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "pdfDetails" }
);

module.exports = mongoose.model("PDF", pdfSchema);
