import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    const getMenu = async () => {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=${id}`
      );
      const data = await res.json();
      setRestaurant(data.data);
    };
    getMenu();
  }, []);

  return (
    <div>
      <h1>{restaurant?.name}</h1>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
      <ul>
        {Object.values(restaurant?.menu?.items).map((i) => (
          <li>{i.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
