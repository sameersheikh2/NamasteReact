import { useState } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "../RestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);

  const searchRestaurant = () => {
    const filteredRes = restaurantList.filter((restaurant) =>
      restaurant.data.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setFilteredRestaurants(filteredRes);
  };

  return (
    <>
      <div className="search-res">
        <input
          type="text"
          placeholder="search for restaurant"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={searchRestaurant} className="search-btn">
          Search
        </button>
        {searchText.length != 0 ? <h2>Search for: {searchText}</h2> : null}
      </div>
      <div className="card">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
