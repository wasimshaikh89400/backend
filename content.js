var mongoose = require("mongoose")

const Schema = mongoose.Schema;
const contents = new Schema({
     per_id: {
        type: String,
        require: true
    },
    content_name: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: true
    }
});
    
module.exports = mongoose.model("Content", contents)