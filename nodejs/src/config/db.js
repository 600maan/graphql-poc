const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./logger'); 

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30 seconds
    });
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;