import mongoose, { Schema } from "mongoose"

const userSchema = new mongoose.Schema({
    username: String,
    loggedIn: Boolean,
}, {
    collection: 'user'
});

export const User = mongoose.model('user', userSchema);