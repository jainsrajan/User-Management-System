const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Name is Required'],
    },

    username:{
        type:String,
        required:[true , 'Username is Required'],
        unique:true
    },
    
    email:{
        type:String,
        required:[true , 'Email is Required'],
        unique:true
    },

    password:{
        type:String,
        required:[true , 'Email is required'],
        unique:true,
        select:false
    },

    bio:{
             type:String,
             required:[true ,'Bio is Requires']
    },
     
})

module.exports = mongoose.model('user' , userSchema)