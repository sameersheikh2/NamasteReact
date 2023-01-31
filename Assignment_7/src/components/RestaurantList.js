import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
  id,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} width="100%" alt="img" />
      <Link to={"/restaurant/" + id}>
        <h2 className="restaurant-name">{name}</h2>
      </Link>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="restaurant-eta">{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
