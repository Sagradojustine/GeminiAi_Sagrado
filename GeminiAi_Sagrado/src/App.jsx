import { useState } from "react";
import { askAi } from "./lib/ai";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await askAi(prompt);
    setResponse(response);
    setPrompt("");
    setLoading(false);
  };

  return (
    <>
      <div className="m-2 py-2 items-center flex flex-col bg-green-300">
        <input
          className="border-black text-black border-2 rounded-md p-1"
          type="text"
          value={prompt}
          onChange={handleInputChange}
        />
        <button
          className="bg-black m-2 text-white rounded-md p-1"
          onClick={handleSubmit}
        >
          {loading ? "Generating..." : "Submit"}
        </button>
        <p
          className={`border-black border-2 rounded w-80 m-2 py-2 ${response ? "" : "hidden"
            }`}
        >
          {response}
        </p>
      </div>
    </>
  );
}