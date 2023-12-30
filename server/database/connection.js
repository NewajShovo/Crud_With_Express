const mongoose = require("mongoose");
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

    const dbName = globalConnection.connections[0].name;
    console.log(`Connected to database: ${dbName}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// module.exports = connectDB;
module.exports = { connectDB, globalConnection };
