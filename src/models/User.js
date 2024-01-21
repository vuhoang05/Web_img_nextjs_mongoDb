import mongoose from "mongoose";
const { Schema, models, model } = require("mongoose");
const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
}, { timestamps: true });
export default mongoose.models.User || mongoose.model('User', UserSchema);