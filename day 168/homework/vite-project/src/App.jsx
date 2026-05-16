import { useState, useEffect } from "react";
import Registration from "./components/Registration";
import Logination from "./components/Logination";
import Changination from "./components/Changination";

export default function App() {
  const [user, setUser] = useState(null);
  const [hasAccount, setHasAccount] = useState(!!localStorage.getItem("user"));

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setHasAccount(true);
    }
  }, []);

  const register = (dataOgondSaxeliData) => {
    setUser(dataOgondSaxeliData);
    setHasAccount(true);
  };

  const login = (dataOgondSaxeliData) => {
    setUser(dataOgondSaxeliData);
  };

  const logout = () => {
    setUser(null);
  };

  const remove = () => {
    localStorage.removeItem("user");
    setUser(null);
    setHasAccount(false);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-6">
      {!hasAccount ? (
        <Registration onRegister={register} />
      ) : !user ? (
        <Logination onLogin={login} />
      ) : (
        <Changination user={user} onLogout={logout} onDelete={remove} />
      )}
    </div>
  );
}
