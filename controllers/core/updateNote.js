import Notes from "../../model/Notes.js";

const updateNote = async (req, res) => {
    const { title, description } = req.body;
    if (!title && !description) {
        throw new Error("Title or Description is needed to update a note.");
    }
    const { noteId } = req.params;

    const previousNote = await Notes.findById(noteId);

    await Notes.updateOne({ _id: noteId }, { title, description }, { runValidators: true });
    const updatedNote = await Notes.findById(noteId);

    if (previousNote.title === updatedNote.title && previousNote.description === updatedNote.description) {
        throw new Error("Cannot update a note with same data.")
    }

    res.status(200).send("Note is successfully updated.")
}

export default updateNote;