const User=require('../models/User');
const loginUser=async (req,res)=>{
    const{username,password}=req.body;
    try{
        const user=await User.findOne({username});
        if(!user||user.password!==password)
        {
            return res.status(401).json({message:"Invalid credentials"});
        }
        res.status(200).json({
            message:"Logged in",
            user:{
                id:user._id,
                role:user.role,
                username:user.username
                //password:user.password
            }
        });
    }
    catch(err){
        console.log("error in signing up");
        res.status(500).json({message:"server error"});
    }
}