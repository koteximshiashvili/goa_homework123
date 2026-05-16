import React from "react";

export default function AgentList({ agents }) {
  return (
    <div>
      <h2>Agents</h2>
      {agents.map((a) => (
        <div key={a.id} className="card">
          <h3>{a.name}</h3>
          <p>Skill: {a.skill}</p>
          <p>Level: {a.level}</p>
          <p>Missions: {a.missions_completed}</p>
        </div>
      ))}
    </div>
  );
}