import image1 from "../assets/avatar1.jpg";
import image2 from "../assets/avatar5.jpg";
import image3 from "../assets/avatar6.jpg";

const NewCollection = () => {
  return (
    <div className="new_collection">
      <div className="heading">
        <h2>New Collection</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit.
          adipisicing elit.
        </p>
      </div>
      <div className="img__grid">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <button className="action-btn loadmore">Load More</button>
    </div>
  );
};

export default NewCollection;
