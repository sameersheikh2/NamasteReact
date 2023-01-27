import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} width="100%" alt="img" />
      <h2 className="restaurant-name">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="restaurant-eta">{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
