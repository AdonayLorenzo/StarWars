import { ref, push, get } from "firebase/database";
import db from "./firebase.config.js";

const chatRef = ref(db, "chat");

const sendChatMessage = (name, message) => {
    try {
        // Enviar mensaje al chat
        push(chatRef, {
            name: name,
            message: message
        });
    } catch (error) {
        console.error("Error sending chat message:", error);
        throw error;
    }
}

const getChat = async () => {
    try {
        // Obtener los mensajes del chat
        const snapshot = await get(chatRef);
        const chatData = [];
        snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            chatData.push(childData);
        });
        return chatData;
    } catch (error) {
        console.error("Error getting chat data:", error);
        throw error;
    }
}

export default {
    sendChatMessage,
    getChat
};

