import { notes, updateCount, count } from "../model/Notes.js";

const postNotes = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        throw new Error("Title and Description is needed to be added.")
    }

    const duplicateNote = notes.filter((i, val) => val.title === title);

    if (duplicateNote.length > 0) {
        throw new Error("Title must be unqiue.")
    }

    updateCount();

    notes.push({ id: count, title: title, description: description });

    res.status(201).send(`"${title}" has been added successfully!`)
}

export default postNotes;