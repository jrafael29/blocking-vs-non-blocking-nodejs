const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGO_HOST}:27017/testdb`);

module.exports = mongoose