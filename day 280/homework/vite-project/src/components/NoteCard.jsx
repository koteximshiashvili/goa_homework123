export default function NoteCard({ note, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold">{note.title}</h2>
      <p className="text-sm text-gray-500">{note.category} • {note.difficulty}</p>
      <p className="mt-2 text-gray-700">{note.content}</p>
      <button onClick={() => onDelete(note.id)} className="text-red-500 mt-3 text-sm">
        Delete
      </button>
    </div>
  );
}