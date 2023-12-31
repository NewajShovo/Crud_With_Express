const axios = require("axios");
// const { connectDB } = require("./server/database/connection");
const accountType = require("../model/model");
const categoryType = require("../model/category");
const SubCategoryType = require("../model/subCategory");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.fetch_subCategoryType = async (req, res) => {
  const category = req.query.accountType;
  console.log("helllllllllllooooooo");
  console.log(category);

  // Find all categories where accountType is "Deposit"
  SubCategoryType.find({ category: category }, (err, subcategories) => {
    if (err) {
      console.error(err);
      // Handle error
    } else {
      console.log(subcategories);
      const subCategoryValues = subcategories.map(
        (subcategoriesObj) => subcategoriesObj.subCategory
      );
      console.log(subCategoryValues);
      res.json({ subCategoryValues });
      // categories is an array containing all matching documents
    }
  });
};

exports.fetch_categoryType = async (req, res) => {
  const accountTypeValue = req.query.accountType;
  categoryType.find({ accountType: accountTypeValue }, (err, categories) => {
    if (err) {
      console.error(err);
      // Handle error
    } else {
      console.log(categories);
      const categoryValues = categories.map(
        (categoryObj) => categoryObj.category
      );
      console.log(categoryValues);
      res.json({ categoryValues });
      // categories is an array containing all matching documents
    }
  });
};

exports.fetch_accountType = async (req, res) => {
  try {
    // Use distinct to get unique account types from the collection
    const accountTypes = await accountType.distinct("accountType");
    console.log(accountTypes);
    res.json({ accountTypes });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
