import mongoose from "mongoose";
import { citySchema } from "../city/citymodel";
const { Schema } = mongoose;

export const addressSchema = new Schema({
  title: String,
  description: String,
  city: citySchema,
});
