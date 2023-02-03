import { useEffect, useState } from "react";

const useRestaurant = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

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
  const searchRestaurant = (searchText) => {
    const filteredRes = allRestaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRes);
  };

  return { filteredRestaurants, allRestaurants, searchRestaurant };
};

export default useRestaurant;
