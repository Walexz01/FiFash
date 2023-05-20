import heroImg from "../assets/photo-1539109136881-3be0616acf4b.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="side_1--hero">
        <h1>Find The Best Fashion Style For You</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          molestias quam placeat iure molestiae quod veritatis impedit. Optio,
        </p>
        <button className="action-btn">Shop Now</button>
      </div>
      <div className="side_2--hero">
        <img src={heroImg} alt="hero Image" />
      </div>
    </div>
  );
};

export default Hero;
