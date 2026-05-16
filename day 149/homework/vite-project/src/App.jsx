import { useState } from "react";
function App() {
  const [bg, setBg] = useState("bg-white");
  function change(){
    setBg(bg === "bg-yellow-500" ? "bg-white" : "bg-yellow-500");
  };
  const [bg1, setBg1] = useState("bg-white");
  function change1(){
    setBg1(bg1 === "bg-white" ? "bg-gray-400" : "bg-white");
  };
  const [num, setNum] = useState(Math.floor(Math.random() * 10))
  const [score, setScore] = useState(0);
  const [pressed, setPressed] = useState(0);
  console.log(num)
  function add(){
    if (pressed === num){
      setScore(s => s + 1);
      setNum(Math.floor(Math.random() * 10));
      setPressed(0);
    }
    else{
      setPressed(p => p + 1)
    }
  }
  const profiles = [
    { name: "Merabi", age: 19 },
    { name: "Kote", age: 11 },
  ];
  const [index, setIndex] = useState(0);
  function next() {
    if (index < profiles.length){
      setIndex(i => i + 1);
    }
    else{
      setIndex(i => i - 1)
    }
  };
  function ProfileCard({ name, age }) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
      </div>
    );
  }
  function SuperHeroProfileCardReallyBigFunctionName({ name, age, image }){
    return (
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <img src={image} alt={name}/>
      </div>
    );
  }
  return(
    <>
      <div>
        <h1>Task 1</h1>
        <button onClick={change}>Turn On Dark mode</button>
        <div className={bg}>Light</div>
      </div>
      <div>
        <h1>Task 2</h1>
        <button onClick={change1}>Turn On</button>
        <div className={bg1}>Theme</div>
      </div>
      <div>
        <h1>Task 3</h1>
        <button onClick={add}>press</button>
        <div>Score: {score}</div>
      </div>
    <div>
      <h1>Task 4</h1>
      <ProfileCard name={profiles[index].name} age={profiles[index].age}/>
      <button onClick={next}>Next Profile</button>
    </div>
    <div>
      <h1>Task 5</h1>
      <SuperHeroProfileCardReallyBigFunctionName name="Hulk" age={9999} image="https://th.bing.com/th/id/OIP.9riwXmXlTci3JsraygAXlwHaLP?rs=1&pid=ImgDetMain"/>
      <SuperHeroProfileCardReallyBigFunctionName name="SuperMan" age={22} image="https://th.bing.com/th/id/OIP.XzhRl8Dj0dtKNleCXIZV1QHaFW?rs=1&pid=ImgDetMain"/>
      <SuperHeroProfileCardReallyBigFunctionName name="SpiderMan" age={16} image="https://th.bing.com/th/id/R.fa21749d39d8ff8622c2c237ceb5f748?rik=f3h%2b%2fFY2Mm6WVg&riu=http%3a%2f%2fwww.themarysue.com%2fwp-content%2fuploads%2f2015%2f04%2fspider-man.jpg&ehk=rp3sX0qoTecfB0bn3ODwXhKXeCl6JKb%2brMxg59H6n4E%3d&risl=&pid=ImgRaw&r=0"/>
    </div>
    </>
  )  
}

export default App
