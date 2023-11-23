import React, { useState } from "react";
import "./GPT.css";
import { SiAnswer } from "react-icons/si";

const OpenAIChatComponent = () => {
  const [inputMessages, setInputMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputMessages([{ role: "user", content: e.target.value }]);
  };

  const handleCallApi = async () => {
    try {
      setIsLoading(true);

      // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI GPT-3 API key
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: inputMessages,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to call OpenAI API");
      }

      const data = await response.json();
      setOutputText(data.choices[0]?.message?.content || "No response");
    } catch (error) {
      console.error("Error calling OpenAI API:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container gpt_container">
        <textarea
          placeholder="Ask me something..."
          onChange={handleInputChange}
        />
        <div className="gpt_button">
          <button
            className="button"
            onClick={handleCallApi}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : <SiAnswer />}
          </button>
        </div>
        <div className="gpt_response">
          <strong></strong> {outputText}
        </div>
      </div>
    </section>
  );
};

export default OpenAIChatComponent;
