import React, { useState } from "react";

export default function Task3() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPost = () => {
    if (!title.trim() || !body.trim()) return;
    const newPost = { id: Date.now(), title, body };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newPosts = [...posts];
    [newPosts[index - 1], newPosts[index]] = [newPosts[index], newPosts[index - 1]];
    setPosts(newPosts);
  };

  const moveDown = (index) => {
    if (index === posts.length - 1) return;
    const newPosts = [...posts];
    [newPosts[index + 1], newPosts[index]] = [newPosts[index], newPosts[index + 1]];
    setPosts(newPosts);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <button onClick={addPost}>Add Post</button>

      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            <button onClick={() => moveUp(index)}>Move Up</button>
            <button onClick={() => moveDown(index)}>Move Down</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
