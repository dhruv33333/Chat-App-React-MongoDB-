const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //2nd object parameter is for removing warnings
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    });
    console.log(`MongoDB connected`.blue.bold.underline);
  } catch (error) {
    console.log(`Error ${error.message}`.red.bold.underline);
    process.exit();
  }
};

module.exports = connectDB;
