import Notes from "../../model/Notes.js";

const addNote = async (req, res) => {
    const userId = req.id;
    const { title, description } = req.body;

    if (!title || !description) {
        throw new Error("Title and Description are required.");
    }

    const newNote = new Notes({
        userId, title, description
    });

    newNote.save();

    res.status(201).send(`Note named "${title}" is successfully added.`);


}

export default addNote;