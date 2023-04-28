import mongoose, { Schema, model } from 'mongoose'

const postSchema = Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    likes: {
        type: Map,
        of: Boolean,
        default: new Map(),
    },
    comments: [{
        text: {
            type: String,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        isDelete: {
            type: Boolean,
            default: false
        }
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

export default model("post", postSchema)   