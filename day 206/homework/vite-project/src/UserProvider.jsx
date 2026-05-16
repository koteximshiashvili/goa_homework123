import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Temuri", age: 20 });

  const changeName = () => setUser((u) => ({ ...u, name: "Giorgi" }));

  return (
    <UserContext.Provider value={{ user, changeName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;