const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb://localhost:27017/webpack2020', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  console.log(`MongoDB connected to: ${conn.connection.host}`);
  console.log(' ')
}

module.exports = connectDB;