import { restaurantList } from "../../constants";
import RestaurantCard from "../RestaurantList";

const Body = () => {
  return (
    <div className="card">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
      ))}
    </div>
  );
};

export default Body;
