import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      const res = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" +
          id
      );
      const data = await res.json();
      if (data.statusCode !== 404) {
        setRestaurant(data.data);
      } else {
        setRestaurant(data.statusCode);
      }
    };
    getMenu();
  }, []);

  return restaurant;
};

export default useRestaurantMenu;
