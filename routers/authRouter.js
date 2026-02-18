import express from "express";
import errorHandler from "../middleware/errorHandler.js";
import authentication from "../middleware/authentication.js";
import signup from "../controllers/auth/signup.js";
import login from "../controllers/auth/login.js";
import logout from "../controllers/auth/logout.js";

const authRouter = express.Router();

authRouter.post("/signup", errorHandler(signup));
authRouter.post("/login", errorHandler(login));
authRouter.get("/logout", errorHandler(authentication), errorHandler(logout));

export default authRouter;