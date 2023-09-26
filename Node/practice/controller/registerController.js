const { userSchema } = require("../model/model");
const bcrypt = require("bcrypt");




const register =  async(req,res)=>{
    try {
        const {name,age,password} = req.body;
        if(!name || !age || !password){
           return res.send("Either Name or Age is not entered");
        }

        const find_user =await userSchema.findOne({name});

        if(find_user){
            return res.send("User is already registred");
        } 

        const salt = 10;
        // console.log(await bcrypt.hash(password,salt));
        const encrypt = await bcrypt.hash(password.toString(),salt); 
        
        const new_user =await new userSchema ({
            name,
            age,
            password:encrypt
        }).save();
        res.status(200).send({
            success:"ok",
            message:"User Registered",
            new_user
        })

    } catch (error) {
        console.log("Error in User Registeration",error);
    }

}

module.exports = register;