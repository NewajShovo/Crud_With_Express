const mongoose = require("mongoose");

const SubCategoryTypeSchema = new mongoose.Schema({
  category: String,
  subCategory: String,
  // Add other fields as needed based on your data structure
});

const SubCategoryType = mongoose.model(
  "subcategory_types",
  SubCategoryTypeSchema
);

module.exports = SubCategoryType;
