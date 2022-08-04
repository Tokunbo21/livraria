import mongoose from "mongoose"

mongoose.connect("mongodb+srv://toks:1234@cluster0.hqm8z.mongodb.net/node-alura");

let db = mongoose.connection;

export default db;

//mongodb+srv://tokunbo:1234@cluster0.hm4pr.mongodb.net/node-alura