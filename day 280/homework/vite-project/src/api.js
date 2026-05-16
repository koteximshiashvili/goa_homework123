const API = "http://localhost:5002";

export async function getNotes() {
  const res = await fetch(`${API}/notes`);
  return res.json();
}

export async function createNote(note) {
  await fetch(`${API}/notes`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(note)
  });
}

export async function deleteNote(id) {
  await fetch(`${API}/notes/${id}`, {method:"DELETE"});
}

export async function getCategories() {
  const res = await fetch(`${API}/categories`);
  return res.json();
}

export async function createCategory(name) {
  await fetch(`${API}/categories`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name})
  });
}

export async function deleteCategory(id) {
  await fetch(`${API}/categories/${id}`,{method:"DELETE"});
}