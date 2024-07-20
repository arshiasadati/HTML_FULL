import mongoose from "mongoose";
import { connectionDB } from "../../db";
const { Schema } = mongoose;

const conn = connectionDB();

export const newsSchema = new Schema({
  title: String,
  description: String,
  poster: String,
  regDate: Date,
  code: String,
  tags: [String],
});

const NewsModel = conn.model("news", newsSchema);

export { NewsModel };
