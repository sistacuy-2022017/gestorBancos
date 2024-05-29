import mongoose, { Schema } from "mongoose";
import movementsModel from "../movements/movements.model.js";

const clientsSchema = new Schema({
    alias: {
        type: String,
        required: true
    },
    historyTransfers: {
        type: Schema.Types.ObjectId,
        ref: movementsModel,
        required: true
    },
});

export default mongoose.model('Clients', clientsSchema);