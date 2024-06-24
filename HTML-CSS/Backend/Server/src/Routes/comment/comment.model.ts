import mongoose from "mongoose";
import { connectionDB } from "../../db";
const { Schema } = mongoose

const conn = connectionDB()
export const provinceschema = new Schema({
  name : String,
  mail : String,
  commmentText : String,
});

const CommentModel = conn.model("province", provinceschema)

export { CommentModel }