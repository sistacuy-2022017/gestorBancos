import mongoose, { Schema } from "mongoose";
import favoritesModel from "../favoriteAcount/favorites.model";
import acountsModel from "../acount/acounts.model.js";

const usersSchema = new Schema({
    nameUser: {
        type: String,
        required: true
    },
    nicknameUser: {
        type: String,
        required: true
    },
    dpiUser: {
        type: String,
        required: true
    },
    directionUser: {
        type: String,
        required: true
    },
    celNumberUser: {
        type: String,
        required: true
    },
    emailUser: {
        type: String,
        required: true
    },
    passwordUser: {
        type: String,
        required: true
    },
    nameWork: {
        type: String,
    },
    monthlyIncome: {
        type: Number,
        required: true
    },
    tipeUser: {
        type: String,
        required: true
    },
    favoritesAcounts: {
        type: Schema.Types.ObjectId,
        ref: favoritesModel,
    },
    acount: {
        type: Schema.Types.ObjectId,
        ref: acountsModel,
        required: true
    }
});

export default mongoose.model('Users', usersSchema);