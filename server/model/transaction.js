const mongoose = require("mongoose");

const TransactionTypeSchema = new mongoose.Schema({
  accountType: String,
  category: String,
  subcategory: String,
  remark: String,
  totalAmount: Number,
  // Add other fields as needed based on your data structure
});

const Transactions = mongoose.model("transactions", TransactionTypeSchema);

module.exports = Transactions;
