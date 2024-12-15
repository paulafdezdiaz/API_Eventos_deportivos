const mongoose = require("mongoose");

const Schema= mongoose.Schema;

const UserSchema = new Schema({
    username: {type:String, require:true, unique:true},
    password: {type:String, require:true},
    role: {type:String, enum:["admin", "user"], default: "user"}
},{
    collection: "users",
    timestamps: true
});

const Users = mongoose.model("users", UserSchema)

module.exports = Users

