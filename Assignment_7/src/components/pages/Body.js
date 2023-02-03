import { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantList";
import Shimmer from "../Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const searchRestaurant = () => {
    const filteredRes = allRestaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRes);
  };

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await res.json();
        setFilteredRestaurants(data.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(data.data?.cards[2]?.data?.data?.cards);
      } catch (err) {
        console.log(err);
      }
    };
    getRestaurant();
  }, []);

  return (
    <>
      <div className="search-div">
        <input
          type="text"
          className="search-bar"
          placeholder="search restaurants"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={searchRestaurant} className="search-btn">
          Search
        </button>
      </div>
      {/* {searchText.length != 0 ? <h2>Searched for: {searchText}</h2> : null} */}
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
