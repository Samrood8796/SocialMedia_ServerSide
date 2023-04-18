import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    members:Array
},{timestamp:true})

export default mongoose.model('chat', ChatSchema)