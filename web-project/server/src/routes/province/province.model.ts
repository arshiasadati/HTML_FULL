import mongoose from "mongoose";
import { connectionDB } from "../../db";
const { Schema } = mongoose;

const conn = connectionDB();

export const provinceSchema = new Schema({
  title: String,
  code: Number,
});

const ProvinceModel = conn.model("province", provinceSchema);

export { ProvinceModel };
