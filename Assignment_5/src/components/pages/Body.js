import { restaurantList } from "../../constants";
import RestaurantCard from "../RestaurantList";

const Body = () => {
  return (
    <>
      <div className="search-res">
        <input type="text" placeholder="search for restaurant" />
        <button>Search</button>
      </div>
      <div className="card">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
