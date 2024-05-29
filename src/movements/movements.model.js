import mongoose, { Schema } from "mongoose";
import acountsModel from "../acount/acounts.model.js";


const movementsSchema = new Schema({
    tipeMovement: {
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    cuentaRemitente: {
        type: Schema.Types.ObjectId,
        ref: acountsModel,
    },
    cuentaDestinatario: {
        type: Schema.Types.ObjectId,
        ref: acountsModel,
    },
    comment: {
        type: String,
    }
});

export default mongoose.model('Movements', movementsSchema);