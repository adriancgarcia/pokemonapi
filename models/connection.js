const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.URL);

mongoose.connection
    .on('open', () => console.log('connected to mongoose'))
    .on('close', () => console.log('disconnected from mongoose'))
    .on('error', (error) => console.log(error))


    module.exports = mongoose;