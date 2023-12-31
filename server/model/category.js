const mongoose = require("mongoose");

const CategoryTypeSchema = new mongoose.Schema({
  accountType: String,
  category: String,
  // Add other fields as needed based on your data structure
});

const CategoryType = mongoose.model("category_types", CategoryTypeSchema);
// const SubCategoryType = mongoose.model(
//   "SubCategory_Type",
//   SubCategoryTypeSchema
// );

module.exports = CategoryType;
