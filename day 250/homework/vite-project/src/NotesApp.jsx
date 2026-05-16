import React, { useState } from "react";
import { useNotesStore } from "./customHooks/NotesStore";

export default function NotesApp() {
  const [noteInput, setNoteInput] = useState("");
  const { notes, addNote, removeNote } = useNotesStore();

  return (
    <div style={{ padding: 20, background: "#f3e5f5", borderRadius: 8 }}>
      <h2>Notes App</h2>
      <input
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        placeholder="Write a note..."
      />
      <button
        onClick={() => {
          if (noteInput.trim() === "") return;
          addNote(noteInput);
          setNoteInput("");
        }}
      >
        Add Note
      </button>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx}>
            {note} <button onClick={() => removeNote(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
