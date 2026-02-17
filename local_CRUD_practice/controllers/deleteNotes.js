import {notes} from "../model/Notes.js";

const deleteNotes = async (req, res) => {
    if (notes.length == 0) {
        throw new Error("Nothing to delete.")
    }
    notes.length = 0;

    res.status(200).send("Notes are deleted successfully!");
}

export default deleteNotes;