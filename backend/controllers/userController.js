import { User } from '../models/userSchema.js';
import ErrorHandler from '../middlewares/error.js';
import {sendToken} from '../utils/jwtToken.js';
export const register = async (req, res, next) => {
    const { name, email, phone, role, password } = req.body;

    try {
        if (!name || !email || !phone || !role || !password) {
            throw new ErrorHandler('Please fill out the registration form completely!', 400);
        }

        const isEmail = await User.findOne({ email });
        if (isEmail) {
            throw new ErrorHandler('Email already exists!', 400);
        }

        const user = await User.create({
            name,
            email,
            phone,
            role,
            password,
        });
        sendToken(user,200,res,"User Registered Successfully");
    } catch (error) {
        next(error);
    }
};

export const login =async(req,res,next)=>{
    const {email,password,role}=req.body;

    if(!email || !password  || !role){
        return next(new ErrorHandler("Please Provide email,password and role .",400));
    }
    const user =await User.findOne({email}).select("+password");
    if(!user){
      return next(  new ErrorHandler("Invalid Email or Password",400));
    }
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(  new ErrorHandler("Invalid Email or Password",400));
    }
    if(user.role!==role){
        return next(  new ErrorHandler("User with this role not found!",400));
    }
    sendToken(user,200,res,"User logged in successfully!");
};
export const logout=async(req,res,next)=>{
    res.status(201).cookie("token","",{
        httpOnly:true,
        expires:new Date(Date.now()),
    })
    .json({
        success:true,
        message:"User logged out successfully",
    });
};

export const getUser=async(req,res,next)=>{
const user=req.user;
res.status(200).json({
    success:true,
    user,
});
};
