import User from "../model/User.js";
import jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        throw new Error('Please log in!');
    }

    const userId = await jwt.verify(token, process.env.SECRET_KEY);
    if (!userId) {
        throw new Error("Cookie is invalid");
    }

    const user = await User.findById(userId._id);
    if (!user) {
        throw new Error("User not found.")
    }

    req.id = userId;
    req.user = user;

    next();

}

export default authentication;