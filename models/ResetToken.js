import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
const ResetTokenSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    }
})
ResetTokenSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    if (this.isModified('token')) {
        const hashedToken = await bcrypt.hash(this.token, salt)
        this.token = hashedToken
    }
    next();
})
export default model("Reset", ResetTokenSchema)