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

const updatePost=async(req,res)=>{
    try {
        //basic validation to check if the body is not empty
        if(Object.keys(req.body).length===0){
            return res.status(400).json({message:"Request body cannot be empty"});
        }
        const post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!post){
            return res.status(404).json({message:"Post not found"});
        }

        return res.status(200).json({message:"Post updated successfully",post});
    } catch (error) {
        return res.status(500).json({message:"Server error",error});
    }
}

const deletePost=async(req,res)=>{
    try {
        const deleted=await Post.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.stattus(404).json({message:"Post not found"});
        }
        return res.status(200).json({message:"Post deleted successfully"});
    } catch (error) {
        return res.status(500).json({message:"Server error",error});
    }
}
export{
    createPost,
    getPosts,
    updatePost,
    deletePost
}