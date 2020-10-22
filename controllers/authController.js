module.exports.signup_get=(req,res)=>{
    res.render('signUp');
}

module.exports.login_get=(req,res)=>{
    res.render('login');
}

module.exports.signup_post=(req,res)=>{
    res.send(' new signUp');
}

module.exports.login_post=(req,res)=>{
    res.send(' new signUp');
}


