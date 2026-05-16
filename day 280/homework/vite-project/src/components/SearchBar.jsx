export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
}