const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true,
        // poolSize: 5,
    })
        .then(db => console.log('Connected with MongoDB.'))
        .catch(err => console.log(`Unable to connect with MongoDB: ${err.message}`));
}