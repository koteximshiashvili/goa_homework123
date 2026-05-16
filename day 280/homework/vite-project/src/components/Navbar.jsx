export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">

      <h1 className="font-bold text-lg">
        DevNotes
      </h1>

      <div className="flex gap-6">
        <a href="/">Dashboard</a>
        <a href="/notes">Notes</a>
        <a href="/create">Create</a>
        <a href="/categories">Categories</a>
        <a href="/codetester">Code Tester</a>
      </div>

    </nav>
  );
}