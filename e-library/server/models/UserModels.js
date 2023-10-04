import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    books: [{
        type: String
    }],
    address: String,
    isVerified: {
        email: {
            type: Boolean,
            default: false
        },
        phone: {
            type: Boolean,
            default: false
        }
    },
}, { timestamps: true })


const userModel = mongoose.model('Users', userSchema, 'users')
export default userModel;