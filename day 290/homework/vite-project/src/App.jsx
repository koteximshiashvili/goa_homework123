import { useEffect, useState } from "react";
import axios from "axios";

import AgentList from "./components/AgentList";
import MissionList from "./components/MissionList";
import ControlPanel from "./components/ControlPanel";
import Logs from "./components/Logs";

import "./App.css";

export default function App() {
  const [agents, setAgents] = useState([]);
  const [missions, setMissions] = useState([]);
  const [logs, setLogs] = useState([]);

  const fetchAll = async () => {
    const [a, m, l] = await Promise.all([
      axios.get("http://localhost:4000/agents"),
      axios.get("http://localhost:4000/missions"),
      axios.get("http://localhost:4000/logs"),
    ]);

    setAgents(a.data);
    setMissions(m.data);
    setLogs(l.data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const runMission = async (agent_id, mission_id) => {
    if (!agent_id || !mission_id) return;

    await axios.post("http://localhost:4000/run-mission", {
      agent_id,
      mission_id,
    });

    fetchAll();
  };

  return (
    <div className="app">
      <h1>Time Traveler Mission Control</h1>

      <div className="grid">
        <AgentList agents={agents} />
        <MissionList missions={missions} />
      </div>

      <ControlPanel
        agents={agents}
        missions={missions}
        runMission={runMission}
      />

      <Logs logs={logs} />
    </div>
  );
}