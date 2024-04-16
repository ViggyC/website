import React, { useState } from "react";
import "./GPT.css";
import { SiAnswer } from "react-icons/si";

const OpenAIChatComponent = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChatCompletion = async () => {
    try {
      setIsLoading(true);
      const apiResponse = await fetch(
        "https://vigneshchandrasekhar.fly.dev/api/chat-completions",
        // "http://localhost:3001/api/chat-completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

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
        "https://vigneshchandrasekhar.fly.dev/api/clear-history",
        // "http://localhost:3001/api/clear-history",
        {
          method: "POST",
        }
      );
      const result = await apiResponse;
      console.log(result);
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
//<button onClick={handleClearHistory}>Clear History</button>

//https://webserver-production-9f35.up.railway.app
