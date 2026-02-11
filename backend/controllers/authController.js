import jwt from "jsonwebtoken";
import User from "../models/User.js";

//Generate JWT token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'7d'||process.env.JWT_EXPIRES
    });
}

// @desc Register a new user
// @route POST /api/auth/register
// @access Public
export const register=async(req,res,next)=>{
    try{
        const {username,email,password}=req.body;   

    }
    catch(err){
        next(err);
    }   
}

// @desc Login user and get token
// @route POST /api/auth/login
// @access Public
export const login=async(req,res,next)=>{
}

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private
export const getProfile=async(req,res,next)=>{
    
}

// @desc Update user profile
// @route PUT /api/auth/profile
// @access Private
export const updateProfile=async(req,res,next)=>{

}

// @desc Change user password
// @route PUT /api/auth/change-password
// @access Private
export const changePassword=async(req,res,next)=>{
}