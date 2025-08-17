import { Schema, model } from "mongoose";

const stickerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
export const Sticker = model("Sticker", stickerSchema);