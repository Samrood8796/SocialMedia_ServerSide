import mongoose, { Schema, mongo } from "mongoose";

const MessageSchema = Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('message', MessageSchema)