import mongoose from "mongoose";
import { connectionDB } from "../../db";
import { addressSchema } from "../address/address.model";
const { Schema } = mongoose;

const conn = connectionDB();

const memberSchema = new Schema({
  firstname: String,
  lastname: String,
  nationalcode: String,
  mobile: String,
  email: String,
  age: Number,
  address: [addressSchema],
});

const MemberModel = conn.model("member", memberSchema);

export { MemberModel };
