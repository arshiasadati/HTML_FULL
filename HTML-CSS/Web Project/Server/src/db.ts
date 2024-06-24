import mongoose from "mongoose";

export const connectionDB = function newconn() {
    return mongoose.createConnection("mongodb://127.0.0.1:27017/test-mongoose")
}