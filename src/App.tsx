import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import image from "./assets/photo-1539109136881-3be0616acf4b.jpeg";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <div className="new_collection">
        <div className="heading">
          <h2>New Collection</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit.
            adipisicing elit.
          </p>
        </div>
        <div className="img__grid">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <button className="action-btn loadmore">Load More</button>
      </div>
    </div>
  );
}

export default App;
