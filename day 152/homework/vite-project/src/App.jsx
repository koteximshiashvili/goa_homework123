import { useState } from 'react';
import Box from './components/Box.jsx';
import Input from './components/Input.jsx';
import Text from './components/Text.jsx';
import ProfileCard from './components/ProfileCard.jsx';
function App() {
  const arr = ["hello", "hello1", "hello2"];
  const num = 4;
  const color = "red-400";
  const [text, setText] = useState("");
  const arr1 = []
  const arr2 = [true, false]
  for(let i = 0; i < 100; i ++){
    arr1.push(arr2[Math.floor(Math.random() * 2)]);
  }
  const profilesData = [
    {
      id: 1,
      name: "John Doe",
      phone: "+995 555 123 456",
      email: "john@example.com",
      image: "https://via.placeholder.com/100",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Anna Smith",
      phone: "+995 555 654 321",
      email: "anna@example.com",
      image: "https://via.placeholder.com/100",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Giorgi Ivanishvili",
      phone: "+995 555 987 654",
      email: "giorgi@example.com",
      image: "https://via.placeholder.com/100",
      isFavorite: false,
    },
  ];
  console.log(arr1)
  const [profiles, setProfiles] = useState(profilesData);
  function favorite(id){
    setProfiles(prev =>
      prev.map(profile => 
        profile.id === id ? { ...profile, isFavorite: !profile.isFavorite } : profile
      )
    );
  }
  return (
    <>
      {arr.map((el, index) => <h1 key={index}>{el}</h1>)}
      <Box num={num} color={color}/>
      <Input value={text} setText={setText}/>
      <Text text={text}/>
      {arr1.map((el, index) => <p key={index}>{el ? 1 : 0}</p>)}
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} favorite={() => favorite(profile.id)}
        />
      ))}
    </>
  );
};

export default App;
