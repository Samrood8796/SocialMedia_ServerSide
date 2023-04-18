import mongoose, { Schema, Mongoose, model } from "mongoose";
import bcrypt from "bcrypt"
const VerificationTokenSchema = new Schema({
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
        required: true,
        default: Date.now()
    }
})
VerificationTokenSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    if (this.isModified('token')) {
        const hashedToken = await bcrypt.hash(this.token, salt)
        this.token = hashedToken
    }
    next();
})
export default model("VerificationToken", VerificationTokenSchema)