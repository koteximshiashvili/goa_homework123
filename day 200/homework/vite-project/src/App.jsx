<<<<<<< HEAD
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
import Task5 from './Task5'

function App() {
  return (
    <>
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
    </>
=======
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [clicked, setClicked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([])
  console.log(data, data1);
  function post(){
    setPosts(prev => [...prev, {title, description}]);
    setTitle("");
    setDescription("");
  }
  function remove(index){
    setPosts(prev => prev.filter((_, i) => i !== index));
  }
  function move(direction, index){
    const updatedPosts = [...posts];
    switch(direction){
      case "up":
        if (index > 0){
          [updatedPosts[index], updatedPosts[index - 1]] = [updatedPosts[index - 1], updatedPosts[index]]
          setPosts(updatedPosts)
        }
        break;
      case "down":
        if(index < posts.length - 1){
          [updatedPosts[index], updatedPosts[index + 1]] = [updatedPosts[index + 1], updatedPosts[index]]
          setPosts(updatedPosts)
        }
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    async function getData(){
      try{
        let fetchedData = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!fetchedData.ok){
          throw new Error("ERROR");
        }
        let data = await fetchedData.json();
        setData(data);
      }catch(error){
          console.log('couldnt get the data');
      }
    }
    if(loaded) getData()
  }, [clicked]);

  useEffect(() => {
    async function getData(){
      try{
        let fetchedData = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!fetchedData.ok){
          throw new Error("ERROR");
        }
        let data = await fetchedData.json();
        setData1(data);
      }catch(error){
          console.log('couldnt get the data');
      }
    }
    getData()
  }, [])
  return (
    <div className='flex flex-col space-y-3'>
      <button onClick={() => {
        setClicked(true);
        setLoaded(true);
      }}>Load Users</button>
      {clicked && data.map(i => <p className='m-4 text-xl font-bold' key={i.id}>{i.name}</p>)}
      {data1.map(i => (
        <div className='m-4 bg-[#f4f4f4] rounded-2xl p-6 border' key={i.id}>
          <h1 className='text-xl font-bold'>{i.title}</h1>
          <p className='opacity-70'>{i.body}</p>
        </div>
      ))}
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={post}>Post</button>
      {posts.map((i, index) => (
        <div className='m-4 bg-[#f4f4f4] rounded-2xl p-6 border' key={index}>
          <h1 className='text-xl font-bold'>{i.title}</h1>
          <p className='opacity-70'>{i.description}</p>
          <div className='flex space-x-2'>
            <button onClick={() => remove(index)}>Remove</button>
            <button onClick={() => move("up", index)}>Move Up</button>
            <button onClick={() => move("down", index)}>Move Down</button>
          </div>
        </div>
      ))}
    </div>
>>>>>>> 5b806b4851c251dee09786efa15add3db8c19676
  )
}

export default App
