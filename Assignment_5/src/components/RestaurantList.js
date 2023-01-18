import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="restaurant_list">
      <img src={IMG_CDN_URL + cloudinaryImageId} width="100%" alt="img" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
