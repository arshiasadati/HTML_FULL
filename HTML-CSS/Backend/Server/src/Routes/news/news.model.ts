import mongoose from "mongoose";
import { connectionDB } from "../../db";
const { Schema } = mongoose

const conn = connectionDB()
export const newsschema = new Schema({
  title: String,
  description: String,
  poster: String,
  regDate: Date,
  code : String,
  tags: [String]
});

const NewsModel = conn.model("news", newsschema)

export { NewsModel }