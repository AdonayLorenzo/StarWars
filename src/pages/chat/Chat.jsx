import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Chat.css";
import chatData from "../../firebase/chat";

const Chat = () => {
  const [chat, setChat] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const chatDataResponse = await chatData.getChat();
        setChat(chatDataResponse);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    fetchChat();
  }, []);

  const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      await chatData.sendChatMessage(name, message);
      setMessage("");
    } catch (error) {
      console.error("Error sending chat message:", error);
    }
  };

  return (
    <div className="chat-container">
      <Header />
      <div className="chat-messages">
        {chat.map((item, index) => (
          <div key={index}>
            <p>{item.name}:{item.message}</p>
            <br></br> 
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} id="chatForm">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-message" htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="send-button">Send</button>
      </form>
      <Footer />
    </div>
  );
};

export default Chat;

