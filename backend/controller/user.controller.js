import express from 'express';
import user from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';

dotenv.config();



const signup = async (req, res) => {
    const {fullname, email, password} = req.body;   
    
    try {
        // Validate required fields
        if (!fullname || !email || !password) {
            return res.status(400).json({ 
                message: "All fields are required" 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                message: "Invalid email format" 
            });
        }

        // Check if user already exists
        const existingUser = await user.findOne({ 
            email: email.toLowerCase() 
        });
        
        if (existingUser) {
            return res.status(400).json({ 
                message: "User already exists" 
            });
        }

        // Validate password strength
        if (password.length < 6) {
            return res.status(400).json({ 
                message: "Password must be at least 6 characters long" 
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const newUser = new user({
            fullname: fullname.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            {
                id: newUser._id, 
                email: newUser.email,
                fullname: newUser.fullname
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            token,
            message: "User created successfully"
        });
    }
    catch (error) {
        console.error("Error during signup:", error);
        
        // More specific error handling
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                message: "Invalid input data" 
            });
        }
        
        res.status(500).json({ 
            message: "Internal server error" 
        });
    }
};

const login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        // Check if user exists
        const existingUser = await user.findOne({ email: email.toLowerCase() });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Verify password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Generate JWT token
        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email, fullname: existingUser.fullname },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

 
 export default { signup, login };