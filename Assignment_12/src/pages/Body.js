import { useState } from "react";
import Filter from "../components/Filter";
import RestaurantList from "../pages/RestaurantList";
import Shimmer from "../components/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useSelector } from "react-redux";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {
    allRestaurants,
    filteredRestaurants,
    searchRestaurant,
    searchResult,
  } = useRestaurant(searchText);

  return (
    <>
      <div className="flex justify-center my-9">
        {/* {console.log(allRestaurants[1]?.data)} */}
        <input
          type="text"
          className="p-1 outline-2 outline-[#551e19] border-[#551e19]/70 shadow-md placeholder-gray-500 focus:placeholder-opacity-0 border-[1px]  text-center rounded focus:bg-[#fffbf0] "
          placeholder="Search restaurants..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            searchRestaurant(searchText);
          }}
          className="mx-2 px-3 rounded font-semibold text-[#c56e33] border-[1px] border-[#551e19]/70 hover:bg-[#c56e33]/70 hover:text-white tracking-wider hover:transition-colors duration-300 ease"
        >
          Search
        </button>
      </div>
      <span className="">{searchResult}</span>
      <Filter />
      {allRestaurants.length === 0 ? (
        <Shimmer num={15} />
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantList key={restaurant.data.id} {...restaurant.data} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
