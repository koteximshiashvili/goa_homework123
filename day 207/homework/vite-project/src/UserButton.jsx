import { useContext } from "react";
import { UserContext } from "./UserProvider";

const UserButton = () => {
  const { user, changeName } = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default UserButton;
