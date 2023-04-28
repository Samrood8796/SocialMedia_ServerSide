import mongoose, { model, Schema } from "mongoose";

const reportSchema = Schema({
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    reason: {
        type: String
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})
const report= model('report', reportSchema)
export default report;