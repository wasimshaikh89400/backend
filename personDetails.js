var mongoose = require("mongoose")

const Schema = mongoose.Schema;
const personDetail = new Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    contact_no: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
    
module.exports = mongoose.model("Person", personDetail)