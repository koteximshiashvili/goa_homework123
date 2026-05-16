import React, { useEffect, useState } from "react";

export default function Task2() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setPosts(data);
      } catch {
        setError("Failed to fetch data ❌");
      }
    };
    loadPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error && <p>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
