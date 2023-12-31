const mongoose = require("mongoose");
// const { CategoryType, SubCategoryType } = require("../model/model");
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
    // // Insert a document into the "Transaction" collection
    // const newTransaction = await SubCategoryType.create({
    //   category: "Admission Fee",
    //   subCategory: "CCAP",
    //   // Add other fields as needed based on your data structure
    // });
    // const newTransaction1 = await SubCategoryType.create({
    //   category: "Admission Fee",
    //   subCategory: "APP[Level-01]",
    //   // Add other fields as needed based on your data structure
    // });
    // const newTransaction2 = await SubCategoryType.create({
    //   category: "Admission Fee",
    //   subCategory: "APP[Level-02]",
    //   // Add other fields as needed based on your data structure
    // });

    // const newTransaction3 = await SubCategoryType.create({
    //   category: "Tuition Fee",
    //   subCategory: "APP[Level-02]",
    //   // Add other fields as needed based on your data structure
    // });

    // const newTransaction4 = await SubCategoryType.create({
    //   category: "Tuition Fee",
    //   subCategory: "CCAP",
    //   // Add other fields as needed based on your data structure
    // });

    // console.log("Document inserted successfully:");
    // console.log(newTransaction);

    console.log(`Connected to database: ${dbName}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// module.exports = connectDB;
module.exports = { connectDB, globalConnection };
