import image from "../assets/avatar7.jpg";

const DealOfTheDay = () => {
  return (
    <div className="deal_of_the_day">
      <div className="deal__left">
        <h2>Deal of the Day</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          consectetur fugiat rem quam corporis Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia, doloribus. temporibus
          reprehenderit perferendis.
        </p>
        <div className="times">
          <div className="hours time">
            08
            <span>Hours</span>
          </div>
          <div className="minutes time">
            11
            <span>Minute</span>
          </div>
          <div className="sec time">
            08
            <span>Seconds</span>
          </div>
        </div>
        <button className="action-btn">Buy now</button>
      </div>
      <div className="deal-right">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default DealOfTheDay;
