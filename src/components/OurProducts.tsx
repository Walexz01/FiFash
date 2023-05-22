import image1 from "../assets/avatar1.jpg";
import image6 from "../assets/avatar6.jpg";
import image7 from "../assets/avatar7.jpg";
import image5 from "../assets/avatar5.jpg";

const image = [image1, image5, image6, image7, image5, image6];

const OurProducts = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="cards">
        {image.map((image, index) => {
          return (
            <div key={index} className="product__card">
              <img src={image} alt="" />
              <div className="card__details">
                <div className="price">$10</div>
                <div className="name">Lorem ipsum dolor sit.</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
