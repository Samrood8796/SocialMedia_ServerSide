import Message from "../models/Message.js";


export const createMessage = async (req, res) => {
    try {
        const { chatId, senderId, text } = req.body.message
        const message = new Message({
            chatId, senderId, text
        })
        const response = await message.save()
        return res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json('internal error')
    }
}

export const getMessages = async (req, res) => {
    try {
        const { chatId } = req.params
        const messages = await Message.find({ chatId })
        res.status(200).json(messages) 
    } catch (err) {
        console.log(err)
        res.status(500).json('internal error')
    }  
} 