import Notes from "../../model/Notes.js";

const deleteNote = async (req, res) => {
    const { noteId } = req.params;

    const existedNote = await Notes.findById(noteId);
    if (!existedNote) {
        throw new Error("Note does not exist.");
    }

    const deletedNote = await Notes.findByIdAndDelete(noteId);

    res.status(200).send(`Note named "${deletedNote.title}" is successfully deleted.`);
}

export default deleteNote;