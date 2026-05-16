import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const AuthButtons = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  if (isLoggedIn)
    return (
      <div>
        <p>Welcome User</p>
        <button onClick={toggleLogin}>Logout</button>
      </div>
    );

  return <button onClick={toggleLogin}>Login</button>;
};

export default AuthButtons;
