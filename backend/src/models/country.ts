import mongoose, { Schema } from "mongoose";

export const countrySchema = new mongoose.Schema({
    country: String,
    continent: String,
    city: String,
    dish: String,
    visitedAt: String,
    users: [String]
}, {
    collection: 'land'
});

export const Country = mongoose.model("country", countrySchema);