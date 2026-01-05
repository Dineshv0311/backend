import { User } from "../models/user.model.js";
const registerUser=async(req,res)=>{
    try {
        const {username,password,email}=req.body;
        //basic validation
        if (!username || !password || !email){
            return res.status(400).json({message:"All fields are required"});
        }

        //check for existing user
        const existingUser=await User.finsOne({$or:[{username},{email}]});
        if (existingUser){
            return res.status(400).json({message:"Username or email already in use"});
        }

        //create new user
        const user=await User.create({
            username,
            password,
            email:email.toLowerCase(),
            loggedIn:false,
        })

        return res.status(201).json({message:"User registered successfully",userId:{id:user._id,email:user.email,username:user.username}});
    } catch (error) {
        res.status(500).json({message:"Server error",error:error.message});
    }
};

export {
    registerUser
};