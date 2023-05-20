import image from "../assets/photo-1539109136881-3be0616acf4b.jpeg";

const BestFashion = () => {
  return (
    <div className="best__fashion">
      <div className="best__left">
        <img src={image} alt="" />
      </div>
      <div className="best__right">
        <h2>Best Fashion Since 2020</h2>
        <p>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Error adipisci omnis dolore illum voluptates modi.
          Est, nam enim? Ut, enim? consectetur, adipisicing elit. Illo cumque
          sed hic asperiores optio praesentium excepturi iste minus nam eius.
        </p>
        <div className="stats">
          <div className="stat">
            2014
            <span>FiFash Founded</span>
          </div>
          <div className="stat">
            8900+
            <span>Product Sold</span>
          </div>
          <div className="stat">
            3105
            <span>Best Review</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFashion;
