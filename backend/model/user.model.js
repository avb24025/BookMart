import mongoose from 'mongoose';

const userschema=new mongoose.Schema({
    fullname: {
        type: String,   
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },  
})

const user=mongoose.model('User',userschema);
export default user;