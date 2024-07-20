import mongoose from "mongoose";

export type Comment = {
  name: String;
  mail: String;
  commentText: String;
  newsId: mongoose.Types.ObjectId;
  status: Number;
};
