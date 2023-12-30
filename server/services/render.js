const axios = require("axios");
// const { connectDB } = require("./server/database/connection");
const accountType = require("../model/model");

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

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
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
