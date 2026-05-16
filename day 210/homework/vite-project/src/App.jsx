import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ErrorBoundaryClassA from "./ErrorBoundaryA";
import ErrorBoundaryClassB from "./ErrorBoundaryB";

function App() {
  return (
    <div>
      <p>ErrorBoundary არის კლასი რომელიც იჭერს ერორებს ისე რო არ დაქრაშოს მთლიანი ვებსაიტი</p>
      <ErrorBoundaryClassA>
        <ComponentA />
      </ErrorBoundaryClassA>

      <ErrorBoundaryClassA>
        <ComponentB />
      </ErrorBoundaryClassA>

      <ErrorBoundaryClassA>
        <ComponentA />
        <ComponentB />
      </ErrorBoundaryClassA>

      <ErrorBoundaryClassB>
        <ComponentA />
      </ErrorBoundaryClassB>

      <ErrorBoundaryClassB>
        <ComponentB />
      </ErrorBoundaryClassB>

      <ErrorBoundaryClassB>
        <ComponentA />
        <ComponentB />
      </ErrorBoundaryClassB>
    </div>
  );
}

export default App;
