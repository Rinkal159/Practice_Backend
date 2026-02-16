import {notes} from "../model/Notes.js";

const getNotes = async (req, res) => {
    if (notes.length == 0) {
        throw new Error("Nothing to fetch. Please add notes.")
    }
    res.status(200).send(notes);
}

export default getNotes;