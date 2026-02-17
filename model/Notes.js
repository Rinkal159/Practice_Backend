import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "UserId is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, { timestamps: true });

const Notes = mongoose.model('Notes', notesSchema);
export default Notes;

