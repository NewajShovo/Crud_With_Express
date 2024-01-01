const mongoose = require("mongoose");
// const {Acc CategoryType, SubCategoryType } = require("../model/model");
const CategoryType = require("../model/category");
const SubCategoryType = require("../model/subCategory");
const AccountType = require("../model/model");
let globalConnection;
const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  try {
    // If the connection is already established, reuse it
    if (globalConnection && globalConnection.readyState === 1) {
      console.log("Using existing MongoDB connection");
    } else {
      // If the connection doesn't exist or is not ready, establish a new connection
      globalConnection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      console.log(`MongoDB connected: ${globalConnection.connection.host}`);
    }

    // //   accountType: String,
    // // category: String,
    const dbName = globalConnection.connections[0].name;

    // const newTransaction = await AccountType.create({
    //   accountType: "Deposit",
    // });

    // const newTransaction1 = await AccountType.create({
    //   accountType: "Withdraw",
    // });

    // const newTransaction = await CategoryType.create({
    //   accountType: "Deposit",
    //   category: "Admission Fee",
    // });
    // const newTransaction1 = await CategoryType.create({
    //   accountType: "Deposit",
    //   category: "Tuition Fee",
    // });

    // const newTransaction2 = await SubCategoryType.create({
    //   category: "Admission Fee",
    //   subCategory: "CCAP",
    // });
    // const newTransaction3 = await SubCategoryType.create({
    //   category: "Admission Fee",
    //   subCategory: "AAP[Level-1]",
    // });

    // const newTransaction4 = await SubCategoryType.create({
    //   category: "Tuition Fee",
    //   subCategory: "ESS",
    // });
    // const newTransaction5 = await SubCategoryType.create({
    //   category: "Tuition Fee",
    //   subCategory: "MSS",
    // });

    // const newTransaction2 = await CategoryType.create({
    //   accountType: "Withdraw",
    //   category: "Transport",
    // });
    // const newTransaction3 = await CategoryType.create({
    //   accountType: "Withdraw",
    //   category: "Communication",
    // });

    // const newTransaction = await CategoryType.create({
    //   accountType: "Withdraw",
    //   category: "Transport",
    // });
    // const newTransaction1 = await CategoryType.create({
    //   accountType: "Withdraw",
    //   category: "Communication",
    // });

    // const newTransaction2 = await SubCategoryType.create({
    //   category: "Transport",
    //   subCategory: "City outskirts",
    // });
    // const newTransaction3 = await SubCategoryType.create({
    //   category: "Transport",
    //   subCategory: "Divisional City",
    // });

    // const newTransaction4 = await SubCategoryType.create({
    //   category: "Communication",
    //   subCategory: "Mobile",
    // });
    // const newTransaction5 = await SubCategoryType.create({
    //   category: "Communication",
    //   subCategory: "Courier",
    // });

    console.log(`Connected to database: ${dbName}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// module.exports = connectDB;
module.exports = { connectDB, globalConnection };
