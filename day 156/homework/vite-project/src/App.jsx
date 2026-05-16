import { useState } from 'react';
import { data } from './Data/data.js';
import { ProfileCard } from './components/ProfileCard.jsx';
function App() {
  const [users, setUsers] = useState(data);
  function setFollowing(id){
    setUsers(prev => prev.map(el => el.id == id ? {...el, following: !el.following} : el))
  }
  return (
    <>
      {users.map(el => (
        <ProfileCard key={el.id} name={el.name} age={el.age} following={el.following} setFollowing={setFollowing} id={el.id}/>
      ))}
    </>
  )
}

export default App;
