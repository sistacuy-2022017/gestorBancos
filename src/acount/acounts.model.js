import mongoose, { Schema, mongo } from "mongoose";
import movementsModel from "../movements/movements.model.js";

const acountsSchema = new Schema({
    acountNumber: {
        type: String,
        required: true
    },
    balanceAcount: {
        type: Number,
        required: true
    },
    limitTransactions: {
        type: Number,
        required: true
    },
    movementAcount:{
        type: Schema.Types.ObjectId,
        ref: movementsModel,
        required: true
    },
});

export default mongoose.model('Acounts', acountsSchema);