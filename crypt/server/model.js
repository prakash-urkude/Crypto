const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema( {
    title:{
        type: String,
        requried: true
    },
    fname:{
        type: String,
        requried: true
    },
    lname:{
        type: String,
        required:true
    },
    referralCode:{
        type:String,
    },
    mobileNumber:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("User", UserSchema)