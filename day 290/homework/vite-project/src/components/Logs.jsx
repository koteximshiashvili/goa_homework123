import React from "react";

export default function Logs({ logs }) {
  return (
    <div>
      <h2>Mission Logs</h2>
      <div className="logs">
        {logs.map((log) => (
          <div key={log.id} className="log-entry">
            <p>
              <b>{log.result}</b> — Agent #{log.agent_id} on Mission #
              {log.mission_id}
            </p>
            <small>{new Date(log.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}