import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewCollection from "./components/NewCollection";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <NewCollection />
    </div>
  );
}

export default App;
