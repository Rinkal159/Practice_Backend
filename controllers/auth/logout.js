const logout = async (req, res) => {
    const user = req.user;

    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict"
    })

    res.status(200).send(`${user.name}, you have been successfully logged out.`);
}

export default logout;