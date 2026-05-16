import React from 'react';

const MainPage = ({ setIsLoggedIn }) => {
  const Logout = () => {
    setIsLoggedIn(false);
  };

  const DeleteAccount = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Main Page</h2>
      <p>Welcome {user.username}</p>
      <button onClick={Logout}>Log out</button>
      <button onClick={DeleteAccount}>Delete account
      </button>
    </div>
  );
};

export default MainPage;
