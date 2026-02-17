import express from "express";
import errorHandler from "../middleware/errorHandler.js";
import authentication from "../middleware/authentication.js";
import addNote from "../controllers/addNote.js";
import getNotes from "../controllers/getNotes.js";

const coreRouter = express.Router();

coreRouter.post("/addNote", errorHandler(authentication), errorHandler(addNote));
coreRouter.get("/getNotes", errorHandler(authentication), errorHandler(getNotes));

export default coreRouter;