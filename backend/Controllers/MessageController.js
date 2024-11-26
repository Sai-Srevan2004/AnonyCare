const Message =require('../Models/messageModel')
const Conversation =require('../Models/converstaionModel')


const sendMessage = async (req,res) => {
    try {
        const senderId = req.user.id;
        const receiverId = req.params.id;
        const {message} = req.body;

        let gotConversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]},
        });

        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        };
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            gotConversation.messages.push(newMessage._id);
        };

        await Promise.all([gotConversation.save(), newMessage.save()]);
        
        return res.json({
            newMessage
        })
    } catch (error) {
        console.log(error);
    }
}
const getMessage = async (req,res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.user.id;
        const conversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]}
        }).populate("messages"); 
        return res.json(conversation?.messages);
    } catch (error) {
        console.log(error);
    }
}


module.exports={sendMessage,getMessage}