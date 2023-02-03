import { useState } from "react";
import RestaurantCard from "../RestaurantList";
import Shimmer from "../Shimmer";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { allRestaurants, filteredRestaurants, searchRestaurant } =
    useRestaurant(searchText);

  return (
    <>
      <div className="search-div">
        <input
          type="text"
          className="search-bar"
          placeholder="search restaurants"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            searchRestaurant(searchText);
          }}
          className="search-btn"
        >
          Search
        </button>
      </div>
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant_list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
