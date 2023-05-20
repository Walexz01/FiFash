import BestFashion from "./components/BestFashion";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewCollection from "./components/NewCollection";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <NewCollection />
      <BestFashion />
    </div>
  );
}

export default App;
