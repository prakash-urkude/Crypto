const userModel= require('./model.js');
const jwt=require('jsonwebtoken')

const createuser =async function(req,res){
    try{
        // console.log(req.body)

        const {title,fname,lname,email,password,mobileNumber,referralCode}=req.body;
        if(!fname,!lname,!title,!email,!password) return res.status(400).send({status:false, error:"All data are Mondatory"});
        // console.log(lname)
        
        const create =await userModel.create({title,fname,lname,email,password,mobileNumber,referralCode});
        console.log(create)
        return res.status(201).send({status:true, user:create})
    }
    catch (err) {
       return res.status(500).send({ status:false, error:err.message })
    }

}

// ============================login========================================

const login = async function (req ,res){
    try{
        // console.log(req.body)
        let {email,password} = req.body
        
        if(!email){
            return res.status(400).send({status:false, error:"please provide email"})
        }
        if(!password){
            return res.status(400).send({status:false, error:"please provide password"})
        }
        let user = await userModel.findOne({email,password});
        if (!user) return res.status(400).send({status: false, error: "username or the password is not correct"});

          let token = jwt.sign({userId: user._id.toString()},"cryptoapp");
          console.log(user)
          return res.status(200).send({ status: true, data: token, user: user});
}
catch(error){
    return res.status(500).send({status:false, error:error.message})
}
};

module.exports={createuser,login}