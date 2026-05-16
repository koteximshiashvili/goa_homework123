import { useEffect, useState } from 'react';
import Register from './components/Register.jsx';
import MainPage from './components/MainPage.jsx';

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <MainPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Register setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;