import { notes } from "../model/Notes.js";

const updateNotes = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        throw new Error("Title and new Description are needed to update the the note.")
    }

    const concernedTitle = notes.filter((val) => val.title === title);
    if (concernedTitle.length == 0) {
        throw new Error(`No note named "${title}".`)
    }
    
    concernedTitle[0].description = description;

    res.status(200).send("Notes has been updated successfully!")
}

export default updateNotes;