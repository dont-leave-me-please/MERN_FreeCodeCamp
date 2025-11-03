import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      title: String,
      required: true,
    },
  },
  { timeStamps: true }
);

const Note = mongoose.model("Note", nodeSchema);
export default Note;
