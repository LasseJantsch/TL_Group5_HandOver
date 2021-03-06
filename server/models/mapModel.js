const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define schema
const mapSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    adress : {
        type: String,
        require: true,
    },
    position : {
        type: String,
        require: true,
    },
    openingHours : {
        type: String,
        require: true,
    },
}, {timestamps: true,});


//define model
module.exports = mongoose.model("Map", mapSchema); 