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
        "http://localhost:3001/api/chat-completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      const result = await apiResponse.json();
      setResponse(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container gpt_container">
      <div>
        <textarea
          placeholder="Ask me something..."
          type="text"
          value={prompt}
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
      <div className="gpt_response">{response}</div>
    </div>
  );
};

export default OpenAIChatComponent;
