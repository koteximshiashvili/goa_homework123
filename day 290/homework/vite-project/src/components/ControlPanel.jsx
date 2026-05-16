import React, { useState } from "react";

export default function ControlPanel({ agents, missions, runMission }) {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedMission, setSelectedMission] = useState("");

  return (
    <div>
      <h2>Control Panel</h2>

      <select onChange={(e) => setSelectedAgent(e.target.value)}>
        <option>Select Agent</option>
        {agents.map((a) => (
          <option key={a.id} value={a.id}>
            {a.name}
          </option>
        ))}
      </select>

      <select onChange={(e) => setSelectedMission(e.target.value)}>
        <option>Select Mission</option>
        {missions.map((m) => (
          <option key={m.id} value={m.id}>
            {m.title}
          </option>
        ))}
      </select>

      <button
        onClick={() =>
          runMission(Number(selectedAgent), Number(selectedMission))
        }
      >
        Launch Mission
      </button>
    </div>
  );
}