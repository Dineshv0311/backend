import {Post} from "../models/post.model.js";

//Create a new post

const createPost=async(req,res)=>{
    try {
        const {name,description,age}=req.body;
        //basic validation
        if(!name || !description || !age){
            return res.status(400).json({message:"All fields are required"});
        }
        const post=await Post.create({
            name,
            description,
            age
        });
        return res.status(201).json({message:"Post created successfully",post    
        })
    } catch (error) {
        return res.status(500).json({message:"Server error",error});
    }
}
const getPosts=async(req,res)=>{
    try {
        const posts=await Post.find();
        return res.status(200).json({posts});
    } catch (error) {
        return res.status(500).json({message:"Server error",error});
    }
}

export{
    createPost,
    getPosts
}