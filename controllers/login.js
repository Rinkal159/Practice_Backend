import User from "../model/User.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error("Email and Password aKre required.");
    }

    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error("Invalid Credentials.");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect) {
        throw new Error("Invalid Credentials.");
    }

    const token = await user.genJWT();

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).send(user);
}

export default login;