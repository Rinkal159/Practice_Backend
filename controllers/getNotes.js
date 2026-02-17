import Notes from "../model/Notes.js";

const getNotes = async (req, res) => {
    const id = req.id;

    const notes = await Notes.find({ userId: id }).select("title description");

    if (notes.length == 0) {
        throw new Error('Please add notes to fetch them.');
    }

    res.status(200).send(notes);
}

export default getNotes;