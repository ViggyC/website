import React, { useState } from "react";
import "./GPT.css";
import { SiAnswer } from "react-icons/si";
import { v4 as uuidv4 } from "uuid";
const sessionId = uuidv4();

const OpenAIChatComponent = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCleared, setIsCleared] = useState("");

  const data = {
    userSession: sessionId,
    prompt: prompt,
  };

  const handleChatCompletion = async () => {
    try {
      setIsLoading(true);
      const apiResponse = await fetch(process.env.REACT_APP_API_GPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await apiResponse.text();
      setResponse(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = async () => {
    try {
      const apiResponse = await fetch(
        process.env.REACT_APP_API_CLEAR_HISTORY_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        }
      );
      const result = await apiResponse.text();
      setIsCleared(result);
      alert(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClearChat = async () => {
    setPrompt("");
    setResponse("");
  };

  return (
    <div className="container gpt_container">
      <div>
        <textarea
          placeholder="Ask me something..."
          type="text"
          value={prompt}
          className="resizable-textarea"
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div className="gpt_button">
        <button
          className="button"
          onClick={handleChatCompletion}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : <SiAnswer />}
        </button>
      </div>
      <div
        className="gpt_response"
        dangerouslySetInnerHTML={{ __html: response }}
      />
      <br />
      <div className="clear-buttons">
        <button className="button" onClick={handleClearHistory}>
          Clear History
        </button>
        <button className="button" onClick={handleClearChat}>
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default OpenAIChatComponent;
