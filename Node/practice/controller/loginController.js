const { userSchema } = require("../model/model");
const bcrypt = require("bcrypt")
const jwt =  require("jsonwebtoken");
const secret = "123Ajay";

const login = async(req,res) => {
try {
    const {name , password} = req.body;
    if(!name || !password){
        return res.send("Invalid Credentials");
    }

    const user = await userSchema.findOne({name});
    if(!user){
        return res.send("User is not registered");
    }

    const decrypt = await bcrypt.compare(password.toString(),user.password.toString()); 
    if(!decrypt){
        return res.send("Invalid Password");
    }
    
    const token = jwt.sign({_id:user._id} , secret ,{expiresIn:"1d"});
    
    res.status(200).send({
        success:true,
        message:"Login Successful",
        name:user.name,
        password:password,
        age:user.age,
        token
    })

} catch (error) {
 console.log("Trouble Logging in..",error);
}
}

module.exports = login;