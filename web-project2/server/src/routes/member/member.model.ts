import mongoose from "mongoose";
import { connectionDB } from "../../db";
import { addressSchema } from "../address/address.model";
const { Schema } = mongoose;

const conn = connectionDB();

const memberSchema = new Schema({
  firstname: String,
  lastname: String,
  mobile: String,
  email: String,
  password: String,
  age: Number,
  avatar: String,
});

const MemberModel = conn.model("member", memberSchema);

export { MemberModel };
