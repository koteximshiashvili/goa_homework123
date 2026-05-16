import NormalVariable from "./components/NormalVariable";
import UseRefVar from "./components/useRefVar";
import UseStateVar from "./components/useStateVar";
function App() {
  return (
    <>
      <NormalVariable />
      <UseRefVar />
      <UseStateVar />
      <p>ჩვეულებრივ ცვლადს როდესაც შევცვლით კომპონენტი არ დარენდერდება და რესეტდება დარენდერების დროს. useRef ცვლადიც იგივეა უბრალოდ არ რესეტდება დარენდერების დროს, მას შეუძლია ელემენტების კონტროლი და ის არის ობიექტი რომელშიც არის ერთი ელემენტი current. useStateს როცა შევცვლით საიტი რენდერდება და ის არ რესეტდება.</p>
    </>
  )
};

export default App;
