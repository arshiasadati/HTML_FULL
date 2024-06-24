import mongoose from "mongoose";
import { connectionDB } from "../../db";
import { addressschema } from "../address/address.model";
const { Schema } = mongoose

const conn = connectionDB()
const memberschema = new Schema({
  firstname:String,
  lastname:String,
  nationalcode:String,
  mobile:String,
  email:String,
  age:Number,
  address: [addressschema],
});

const MemberModel = conn.model("members", memberschema)

export { MemberModel }