import React, { useState } from 'react';

const Task5 = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    setPosts(prev => [...prev, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type='text' placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
        <button onClick={addPost}>add</button>
      </form>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task5;
