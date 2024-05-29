import mongoose, { Schema } from "mongoose";
import acountsModel from "../acount/acounts.model.js";

const favoritesSchema = new Schema({
    acount: {
        type: Schema.Types.ObjectId,
        ref: acountsModel, 
        required: true
    },
    dpi: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    }
});

export default mongoose.model('Favorites', favoritesSchema);