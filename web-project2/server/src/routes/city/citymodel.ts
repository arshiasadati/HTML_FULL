import mongoose from "mongoose";
import { connectionDB } from "../../db";
import { provinceSchema } from "../province/province.model";
const { Schema } = mongoose;

const conn = connectionDB();

export const citySchema = new Schema({
  title: String,
  province: provinceSchema,
});

const CityModel = conn.model("city", citySchema);

export { CityModel };
