import mongoose from "mongoose";
import { connectionDB } from "../../db";
const { Schema } = mongoose;

const conn = connectionDB();

export const commentSchema = new Schema({
  name: String,
  mail: String,
  commentText: String,
  newsId: mongoose.Types.ObjectId,
  status: Number,
});

const CommentModel = conn.model("comment", commentSchema);

export { CommentModel };
