import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [view, setView] = useState("auth");
  const [leaderboard, setLeaderboard] = useState([]);
  const [username, setUsername] = useState("");

  async function loadLeaderboard() {
    try {
      const res = await axios.get("http://localhost:5000/leaderboard");
      setLeaderboard(res.data);
    } catch (err) {
      console.error("Leaderboard load error", err);
    }
  }

  async function addPoints(points) {
    try {
      await axios.post("http://localhost:5000/score", {
        username,
        score: points,
      });
      loadLeaderboard();
    } catch (err) {
      console.error("Score update error", err);
    }
  }

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    if (view === "hub") loadLeaderboard();
  }, [view]);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 dark:bg-white dark:text-black text-white p-6 flex justify-center items-center">

        <div className="w-full max-w-4xl">
          {view === "auth" && (
            <AuthScreen
              setView={setView}
              username={username}
              setUsername={setUsername}
            />
          )}

            {view === "hub" && (
              <Hub
                setView={setView}
                theme={theme}
                toggleTheme={toggleTheme}
                leaderboard={leaderboard}
                username={username}
              />
            )}


          {view === "tic" && (
            <TicTacToe onExit={() => setView("hub")} />
          )}

          {view === "memory" && (
            <MemoryMatch onExit={() => setView("hub")} />
          )}

          {view === "rps" && (
            <RPS username={username} addPoints={addPoints} onExit={() => setView("hub")} />
          )}

          {view === "snake" && (
            <SnakeGame addPoints={addPoints} onExit={() => setView("hub")} />
          )}

          {view === "clicker" && (
            <ClickerGame addPoints={addPoints} onExit={() => setView("hub")} />
          )}

          {view === "reaction" && (
            <ReactionTest addPoints={addPoints} onExit={() => setView("hub")} />
          )}
        </div>

      </div>
    </div>
  );
}


function AuthScreen({ setView, username, setUsername }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function login() {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      if (res.data.success) setView("hub");
    } catch (err) {
      setError("Invalid username or password");
    }
  }

  async function register() {
    try {
      await axios.post("http://localhost:5000/signup", { username, password });
      setView("hub");
    } catch (err) {
      setError("Username already exists");
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Arcadia Login</h1>

      <input
        className="w-full p-3 rounded bg-white/5 border border-white/20 mb-3"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="w-full p-3 rounded bg-white/5 border border-white/20 mb-4"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-400 mb-3">{error}</p>}

      <button
        onClick={login}
        className="w-full bg-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-700 mb-3"
      >
        Login
      </button>

      <button
        onClick={register}
        className="w-full bg-green-600 py-3 rounded-xl font-semibold hover:bg-green-700"
      >
        Register
      </button>
    </div>
  );
}
function Hub({ setView, theme, toggleTheme, leaderboard, username }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-xl">
      <header className="flex justify-between items-center mb-6">
        <button onClick={toggleTheme} className="px-3 py-1 bg-white/10 dark:bg-black/10 rounded">
          Toggle {theme === "dark" ? "Light" : "Dark"}
        </button>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-1 bg-white/10 rounded hover:bg-white/20 text-sm"
        >
          Toggle {theme === "dark" ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold">Welcome, {username}</h1>
        <button
          onClick={() => setView("auth")}
          className="px-4 py-2 bg-red-600 rounded-xl hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      <h2 className="text-xl font-semibold mb-3">Mini-Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <GameButton label="Tic-Tac-Toe" onClick={() => setView("tic")} />
        <GameButton label="Memory Match" onClick={() => setView("memory")} />
        <GameButton label="Rock-Paper-Scissors" onClick={() => setView("rps")} />
        <GameButton label="Snake" onClick={() => setView("snake")} />
        <GameButton label="Clicker" onClick={() => setView("clicker")} />
        <GameButton label="Reaction Test" onClick={() => setView("reaction")} />
      </div>

      <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
        {leaderboard.map((p, i) => (
          <div key={i} className="flex justify-between py-1 text-lg">
            <span>{i + 1}. {p.username}</span>
            <span className="font-bold">{p.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GameButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white/10 backdrop-blur-xl py-3 rounded-xl text-center text-lg font-medium border border-white/10 shadow hover:bg-white/20 transition"
    >
      {label}
    </button>
  );
}
function GameWrapper({ title, children, onExit }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-xl text-center">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="mb-6">{children}</div>
      <button
        onClick={onExit}
        className="px-6 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700"
      >
        Exit
      </button>
    </div>
  );
}

function TicTacToe({ onExit }) {
  const empty = Array(9).fill(null);
  const [board, setBoard] = useState(empty);
  const [turn, setTurn] = useState("X");

  function handleClick(i) {
    if (board[i]) return;
    const copy = [...board];
    copy[i] = turn;
    setBoard(copy);
    setTurn(turn === "X" ? "O" : "X");
  }

  return (
    <GameWrapper title="Tic-Tac-Toe" onExit={onExit}>
      <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
        {board.map((c, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="aspect-square bg-white/10 rounded-xl text-3xl font-bold flex items-center justify-center hover:bg-white/20"
          >
            {c}
          </button>
        ))}
      </div>
    </GameWrapper>
  );
}

function MemoryMatch({ onExit }) {
  const [tiles, setTiles] = useState([]);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    const nums = [...Array(8).keys()].flatMap((n) => [n, n]).sort(() => Math.random() - 0.5);
    setTiles(nums);
  }, []);

  function flip(i) {
    if (flipped.includes(i)) return;
    const next = [...flipped, i];
    setFlipped(next);

    if (next.length === 2) {
      const [a, b] = next;
      if (tiles[a] !== tiles[b]) setTimeout(() => setFlipped([]), 700);
      else setFlipped([]);
    }
  }

  return (
    <GameWrapper title="Memory Match" onExit={onExit}>
      <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
        {tiles.map((val, i) => (
          <button
            key={i}
            onClick={() => flip(i)}
            className="aspect-square bg-white/10 rounded-xl text-2xl font-bold flex items-center justify-center hover:bg-white/20"
          >
            {flipped.includes(i) ? val : "?"}
          </button>
        ))}
      </div>
    </GameWrapper>
  );
}

function RPS({ onExit, username, addPoints }) {
  const ops = ["✊", "✋", "✌️"];

  const [msg, setMsg] = useState("Choose your move");

  function play(i) {
    const ai = Math.floor(Math.random() * 3);
    if (i === ai) setMsg("Draw!");
    else if ((i === 0 && ai === 2) || (i === 1 && ai === 0) || (i === 2 && ai === 1)) {
      setMsg("You win! +1 point");
      addPoints(1);
    } else setMsg("You lose!");
  }

  return (
    <GameWrapper title="Rock-Paper-Scissors" onExit={onExit}>
      <div className="flex gap-3 mb-4 justify-center">
        {ops.map((op, i) => (
          <button key={i} onClick={() => play(i)} className="text-4xl bg-white/10 p-4 rounded">{op}</button>
        ))}
      </div>
      <p className="text-xl">{msg}</p>
    </GameWrapper>
  );
}
function SnakeGame({ onExit, addPoints }) {
  const [score, setScore] = useState(0);

  function move() {
    setScore((s) => s + 1);
    addPoints(1);
  }

  return (
    <GameWrapper title="Snake" onExit={onExit}>
      <p className="mb-3 text-lg">Score: {score}</p>
      <button onClick={move} className="bg-white/10 px-4 py-2 rounded">Move Snake</button>
    </GameWrapper>
  );
}

function ClickerGame({ onExit, addPoints }) {
  const [count, setCount] = useState(0);

  function click() {
    const next = count + 1;
    setCount(next);
    if (next % 10 === 0) addPoints(1);
  }

  return (
    <GameWrapper title="Clicker Game" onExit={onExit}>
      <p className="mb-3 text-lg">Clicks: {count}</p>
      <button onClick={click} className="bg-white/10 px-4 py-2 rounded">Click</button>
    </GameWrapper>
  );
}

function ReactionTest({ onExit, addPoints }) {
  const [msg, setMsg] = useState("Click start");
  const [waiting, setWaiting] = useState(false);
  const startTimeRef = React.useRef(null);

  const start = () => {
    setMsg("Wait...");
    setWaiting(true);
    setTimeout(() => {
      setMsg("CLICK NOW!");
      setWaiting(false);
      startTimeRef.current = performance.now();
    }, Math.random() * 2000 + 500);
  };

  const registerClick = () => {
    if (!startTimeRef.current) return setMsg('Press start');
    const delta = performance.now() - startTimeRef.current;
    startTimeRef.current = null;
    setMsg(`Your time: ${Math.round(delta)}ms`);
    if (delta < 250) addPoints(1);
  };

  return (
    <GameWrapper title="Reaction Test" onExit={onExit}>
      <p className="mb-4 text-xl">{msg}</p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        <button onClick={start} disabled={waiting} className="bg-white/10 px-4 py-2 rounded">Start</button>
        <button onClick={registerClick} className="bg-white/10 px-4 py-2 rounded">Click</button>
      </div>
    </GameWrapper>
  );
}
