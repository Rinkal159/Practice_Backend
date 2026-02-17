import { notes } from "../model/Notes.js";

const deleteSpecificNote = async (req, res) => {
    const { title } = req.body;

    if (!title) {
        throw new Error("Title is needed to delete the note.")
    }

    const noteToDelete = notes.filter((val) => val.title === title);
    if (noteToDelete.length == 0) {
        throw new Error(`No note named "${title}".`)
    }

    notes.splice(noteToDelete[0].id - 1, 1);

    res.status(200).send(`Note named "${title}" is successfully deleted.`);
}

export default deleteSpecificNote;
