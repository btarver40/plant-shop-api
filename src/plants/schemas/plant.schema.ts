import * as mongoose from 'mongoose';

export const PlantSchema = new mongoose.Schema({
    name: String,
    scientificName: String,
    price: Number,
    qty: Number,
    descripton: String,
});