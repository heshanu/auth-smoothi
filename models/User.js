const mongoose=require('mongoose');
const {isEmail}=require('validator');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'please enter email address'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        minlength:[6,'minum length is 8']
    },
})

const User=mongoose.model('users',userSchema);

module.exports=User;