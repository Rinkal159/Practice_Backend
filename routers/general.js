import express from "express";
import errorHandler from "../middleware/errorHandler.js";
import getNotes from "../controllers/getNotes.js";
import postNotes from "../controllers/postNotes.js";
import deleteNotes from "../controllers/deleteNotes.js";
import updateNotes from "../controllers/updateNotes.js";
import deleteSpecificNote from "../controllers/deleteSpecificNote.js";

const generalRouter = express.Router();

generalRouter.get("/getNotes", errorHandler(getNotes));
generalRouter.post("/postNotes", errorHandler(postNotes));
generalRouter.delete("/deleteNotes", errorHandler(deleteNotes));
generalRouter.patch("/updateNotes", errorHandler(updateNotes));
generalRouter.delete("/deleteSpecificNote", errorHandler(deleteSpecificNote));

export default generalRouter;