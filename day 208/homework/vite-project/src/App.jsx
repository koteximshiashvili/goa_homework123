import ErrorBoundary from "./Task1"
import Comp from "./Comp"
import ErrorBoundary1 from "./Task2"
import Comp1 from "./Comp1"

function App() {

  return (
    <>
      <ErrorBoundary>
        <Comp />
      </ErrorBoundary>
      <ErrorBoundary1>
        <Comp1 />
      </ErrorBoundary1>
    </>
  )
}

export default App
