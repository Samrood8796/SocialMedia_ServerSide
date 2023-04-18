import mongoose, { model, Schema } from "mongoose";

const NotificationSchema = Schema({
    type: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    friend:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    content: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }
})
const Notification = model('Notification', NotificationSchema)
export default Notification;