import { useState } from "react";

export default function CodeTester() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const result = new Function(code)();
      setOutput(result === undefined ? "Code ran successfully." : result);
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-gray-800">devNotes Code Tester</h2>

      <textarea
        className="w-full h-40 p-3 border rounded-md font-mono text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your JavaScript code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        onClick={runCode}
      >
        Run Code
      </button>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700 mb-2">Output:</h3>
        <pre className="bg-gray-100 p-3 rounded-md min-h-[50px] text-sm font-mono whitespace-pre-wrap">
          {output}
        </pre>
      </div>
    </div>
  );
}