import User from "../../model/User.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new Error("Name, Email and Password all are required");
    }

    const existedUser = await User.find({ email: email });
    if (existedUser.length > 0) {
        throw new Error("User already exists.");
    }

    const hashedPw = await bcrypt.hash(password, 10);

    const newUser = new User({
        name, email, password:hashedPw
    });

    const token = await newUser.genJWT();

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    await newUser.save();

    res.status(201).send(`Hello, ${name}! Welcome to MYNotes.`)
}

export default signup;