const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  accountType: String,
  // Add other fields as needed based on your data structure
});

const AccountType = mongoose.model("Account_Type", schema);

module.exports = AccountType;
