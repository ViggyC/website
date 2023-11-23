import React, { useState } from "react";

const OpenAIChatComponent = () => {
  const [inputMessages, setInputMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddMessage = (role, content) => {
    setInputMessages([...inputMessages, { role, content }]);
  };

  const handleCallApi = async () => {
    console.log("Input message: ", inputMessages);
    try {
      setIsLoading(true);

      // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI GPT-3 API key
      const apiKey = "TODO";

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

  // Introduce a delay between API calls (e.g., wait for 1 second)
  const delayedApiCall = () => {
    setTimeout(() => {
      handleCallApi();
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div>
      <div>
        <button onClick={() => handleAddMessage("user", "Hello")}>
          User: Hello
        </button>
        <button
          onClick={() => handleAddMessage("assistant", "How can I help you?")}
        >
          Assistant: How can I help you?
        </button>
      </div>
      <button onClick={delayedApiCall} disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
      <div>
        <strong>Response:</strong> {outputText}
      </div>
    </div>
  );
};

export default OpenAIChatComponent;
