import Card from "./Card"
import { carCategories } from "./data"
function App() {

  return (
    <div className="flex rounded">
      {carCategories.map((i, index) => <Card key={index} car={i}/>)}
    </div>
  )
}

export default App
