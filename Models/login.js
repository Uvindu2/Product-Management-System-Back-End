const mongoose = require('mongoose')
const { stringify } = require('querystring')


const loginschema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('User', loginschema);