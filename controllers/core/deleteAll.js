import Notes from "../../model/Notes.js";

const deleteAll = async (req, res) => {
    const id = req.id;
    const user = req.user;

    await Notes.deleteMany({ userId: id });

    res.status(200).send(`"${user.name}", your all notes have been deleted!`);


}

export default deleteAll;