require('./db');
const mongoose = require('mongoose');

const User = mongoose.model("User",{
    recordNumber:{
        type:Number
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports = User