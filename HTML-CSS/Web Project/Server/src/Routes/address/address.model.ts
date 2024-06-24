import mongoose from "mongoose";
import { cityschema } from "../city/city.model";
const { Schema } = mongoose

export const addressschema = new Schema({
  title:String,
  city:cityschema,
  description:String
});
