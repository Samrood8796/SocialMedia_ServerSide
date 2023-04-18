import Chat from "../models/Chat.js"
export const createChat = async (req, res) => {
    const { firstId, secondId } = req.body
    try {
        const chat = await Chat.findOne({ members: { $all: [firstId, secondId] } })
        if (chat) return res.status(200).json({chatExist:true})
        const newChat = new Chat({
            members: [firstId, secondId]
        })
        const response = await newChat.save()
        return res.status(200).json(response)
    } catch (err) {
        console.log(err)
        return res.status(400).json('internal error ')
    }
}

export const findUserChats = async (req, res) => {
    const { userId } = req.params
    try { 
        const chat = await Chat.find({ members: { $in: [userId] } })
        return res.status(200).json(chat)
    } catch (err) {
        console.log(err)
        return res.status(400).json('internal error ')
    }
}

export const findChat = async (req, res) => {
    const { firstId, secondId } = req.params
    try {
        const chat = await Chat.findOne({ members: { $all: [firstId, secondId] } })
        return res.status(200).json(chat)
    } catch (err) {
        console.log(err)
        return res.status(400).json('internal error ')
    }
}