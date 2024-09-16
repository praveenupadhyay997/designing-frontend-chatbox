import { useState } from "react";
import "./AppWelcome.css";
import Chatbox from "./Chatbox/Chatbox";

const AppWelcome = () => {
  const [chatSection, setChatSection] = useState(false);

  const chatSectionOpener = () => {
    setChatSection(true);
  };

  return chatSection ? (
    <Chatbox chatBoxParticipants={{}} previousContext={{}} />
  ) : (
    <div className="App App-Wrapper">
      <h1
        className="welcome-card roboto-bold"
        onClick={() => chatSectionOpener()}
      >
        Opinions
      </h1>
    </div>
  );
};

export default AppWelcome;
