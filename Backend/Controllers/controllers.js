const User = require('../models/userSchema.js')

const home = async(req , res)=>{
    res.status(200).send({msg:"Hello Instagram"})
}

const signup = async(req , res)=>{

    try {
        const{name , username , email , password , bio} = req.body

if(!name || !username || !email || !password || !bio)
{
    res.status(500).send({
    msg:"Enter all the details"
    })
}


        await User.create({...req.body})

     res.status(200).send({msg:"User Signup Successfully"})
        
    } catch (error) {
        if(error.code == 11000)
        {
            res.status(500).send({msg:"Email Id already exist"})
        }
         res.status(500).send({msg:error.msg})
    }
}

module.exports={
    signup,
    home
}