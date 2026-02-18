import express from "express";
import errorHandler from "../middleware/errorHandler.js";
import authentication from "../middleware/authentication.js";
import addNote from "../controllers/core/addNote.js";
import getNotes from "../controllers/core/getNotes.js";
import deleteAll from "../controllers/core/deleteAll.js";
import deleteNote from "../controllers/core/deleteNote.js";
import updateNote from "../controllers/core/updateNote.js";

const coreRouter = express.Router();

coreRouter.post("/addNote", errorHandler(authentication), errorHandler(addNote));
coreRouter.get("/getNotes", errorHandler(authentication), errorHandler(getNotes));
coreRouter.get("/deleteAll", errorHandler(authentication), errorHandler(deleteAll));
coreRouter.post("/deleteNote/:noteId", errorHandler(authentication), errorHandler(deleteNote));
coreRouter.post("/updateNote/:noteId", errorHandler(authentication), errorHandler(updateNote));

export default coreRouter;