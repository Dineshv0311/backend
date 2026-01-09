import { User } from "../models/user.model.js";
const registerUser=async(req,res)=>{
    try {
        const {username,password,email}=req.body;
        //basic validation
        if (!username || !password || !email){
            return res.status(400).json({message:"All fields are required"});
        }

        //check for existing user
        const existingUser=await User.findOne({$or:[{username},{email}]});
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
const loginUser=async(req,res)=>{
    try {
        const {
            email,password
        }=req.body;

        const user=await User.findOne({email:email.toLowerCase()});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }

        //compare password
        const isMatch=await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid email or password"});
        }
        return res.status(200).json({message:"Login successful",userId:{id:user._id,email:user.email,username:user.username}});
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}
const logoutUser=async(req,res)=>{
    try {
        const {email}=req.body;
        const user=await User.findOne({
            email:email.toLowerCase()
        })

        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json({message:"Logout successful"});
    } catch (error) {
        res.status(500).json({message:"Internal server error",error});
    }
}
export {
    registerUser,
    loginUser,
    logoutUser
};