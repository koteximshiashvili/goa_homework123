import React from "react";

export default function MissionList({ missions }) {
  return (
    <div>
      <h2>Missions</h2>
      {missions.map((m) => (
        <div key={m.id} className="card">
          <h3>{m.title}</h3>
          <p>Difficulty: {m.difficulty}</p>
          <p>Reward: {m.reward}</p>
        </div>
      ))}
    </div>
  );
}