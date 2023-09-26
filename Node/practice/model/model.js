const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    password:{
        type:String
    }
}, {timestamps:true} );

const userSchema =  mongoose.model("user", schema);

module.exports = {userSchema} ; 