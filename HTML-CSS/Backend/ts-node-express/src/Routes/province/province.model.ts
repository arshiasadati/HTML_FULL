import mongoose from "mongoose";
import { connectionDB } from "../../db";
const { Schema } = mongoose

const conn = connectionDB()
export const provinceschema = new Schema({
  title:String, 
});

const ProvinceModel = conn.model("province", provinceschema)

export { ProvinceModel }