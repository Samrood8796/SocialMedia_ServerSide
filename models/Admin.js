import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true

    },
    isActive: {
        type: Boolean,
        default: true
    }
})
const Admin = mongoose.model("Admin", adminSchema);
export default Admin