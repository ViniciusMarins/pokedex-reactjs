import Pokemon from "./components/Pokemon/Pokemon";
import "./styles/App.css";
import SlideTop from "./components/SlideTop/SlideTop";

function App() {
  return (
    <main id="top">
      <SlideTop />
      <Pokemon />
    </main>
  );
}

export default App;
