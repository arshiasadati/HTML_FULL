import mongoose from "mongoose";
import { connectionDB } from "../../db";
import { provinceschema } from "../province/province.model";
const { Schema } = mongoose

const conn = connectionDB()
export const cityschema = new Schema({
  title:String,
  province: provinceschema,
});

const CityModel = conn.model("city", cityschema)

export { CityModel }