import Avatar from "./components/Avatar.jsx";
import Description from "./components/Description.jsx";
import Name from "./components/Name.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ProductList from "./components/ProductList.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Task from "./components/Task.jsx";
import StudentList from "./components/StudentList.jsx";
function App() {
  const students = [{name: "Mari Miqeladze", score: 7, goingToSchool: "yes"}, {name: "Sandro Melqadze", score: 8, goingToSchool: "no"}, {name: "Luka Miqaberidze", score: 9, goingToSchool: "yes"}]
  const products = [{id: 1, name: "computer", price: 99, inStock: "yes"}, {id: 2, name: "laptop", price: 9999, inStock: "no"}, {id: 3, name: "ipad", price: 99999, inStock: "yes"}]
  return (
    <>
      <ProfileCard avatar={Avatar} description={Description} name={Name}/>
      <ProductList products={products}/>
      <UserStatus loggedIn={false}/>
      <UserStatus loggedIn={true}/>
      <Task name="write programming homework" time="1 second"/>
      <StudentList students={students}/>
    </>
  )
}

export default App
