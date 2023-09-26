const mongoose = require("mongoose");

const connect = async() =>{
    try {
        const connection =await mongoose.connect("mongodb://127.0.0.1:27017/ajay");
        
    } catch (error) {
        console.log("Error in connecting to database",error);
    }
}

module.exports = connect;