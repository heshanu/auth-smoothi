const { compile } = require("ejs");
const User=require('../models/User');
const 

module.exports.signup_get=(req,res)=>{
    res.render('signUp');
}

module.exports.login_get=(req,res)=>{
    res.render('login');
}

module.exports.signup_post=async (req,res)=>{
     const {email,password}=req.body;

     try{ 
        const user=await User.create({email,password});
        res.status(201).json(user);
     }
     catch(err){
        console.log(err);
        res.status(400).send('error,user not created');
     }
   // console.log(email,password);
  //  res.send('new signUp');
}

module.exports.login_post=async (req,res)=>{
    //res.send('new signUp');
    const {email,password}=req.body;
    console.log(email,password);
    res.send('user login');
}


