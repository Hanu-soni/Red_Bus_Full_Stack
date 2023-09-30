const mongoose = require("mongoose");
// const data = require("../data/busdata");

const Bus = require("../modal/bus");
const dbURL="mongodb+srv://Hanusoni133:1234@cluster0.3rrxgxk.mongodb.net/AlmabetterTask";
const DatabaseConnection=mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

module.exports = DatabaseConnection;
