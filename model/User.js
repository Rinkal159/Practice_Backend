import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [4, "Name must have atleast 4 characters."]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        trim: true,
        sparse: true,
        lowercase: true,
        match: [/.+\@.+\..+/, '{VALUE} is invalid']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must have atleast 8 characters."]
    }
}, { timestamps: true });

userSchema.methods.genJWT = async function () {
    const token = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "7d" });
    return token;
}

const User = mongoose.model('User', userSchema);
export default User;

