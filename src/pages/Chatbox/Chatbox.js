import { useEffect, useState } from "react";
import "./Chatbox.css";

const Chatbox = ({ chatBoxParticipants, previousContext }) => {
  const [chatContext, setChatContext] = useState([]);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    if (chatInput !== "Enter your opinions!!!") {
      chatContextSetter();
    }
  }, [chatInput]);

  const chatInputSetter = (e) => {
    setChatInput(e.target.value);
  };

  const chatContextSetter = () => {
    setChatContext((prev) => [
      ...prev,
      {
        sender: chatInput,
      },
    ]);
  };

  return (
    <div className="Main-ChatBox">
      <h1>Opinions</h1>
      <div className="chatbox-input-wrapper">
        <input
          type="text"
          value={chatInput}
          className="chat-input"
          placeholder="Enter your opinions..."
          onChange={chatInputSetter}
        />
        <button onClick={chatContextSetter}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
