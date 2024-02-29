import { useEffect, useState } from "react";
import { ALL_RESTAURANT } from "../constants";
import { useSelector } from "react-redux";

const useRestaurant = () => {
  const fetchRestaurantBy = useSelector((state) => state.fetchBy.fetchBy);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const res = await fetch(fetchRestaurantBy);
        const data = await res.json();
        if (fetchRestaurantBy === ALL_RESTAURANT) {
          setFilteredRestaurants(data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setAllRestaurants(data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } else {
          setFilteredRestaurants(data.data?.cards[0]?.data?.data?.cards);
          setAllRestaurants(data.data?.cards[0]?.data?.data?.cards);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getRestaurant();
  }, [fetchRestaurantBy]);

  const searchRestaurant = (searchText) => {
    const filteredRes = allRestaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredRes.length === 0) {
      setSearchResult(["No restaurant found", searchText]);
    } else {
      setSearchResult("");
    }
    setFilteredRestaurants(filteredRes);
  };

  return {
    filteredRestaurants,
    allRestaurants,
    searchResult,
    searchRestaurant,
  };
};

export default useRestaurant;
