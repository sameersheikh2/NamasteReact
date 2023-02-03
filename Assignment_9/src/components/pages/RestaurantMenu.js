// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurantMenu(id);
  console.log(restaurant);
  return (
    <div>
      <h1>{restaurant?.name}</h1>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
      <ul>
        {restaurant.length !== 0
          ? Object.values(restaurant?.menu?.items).map((i) => (
              <li key={i.id}>{i.name}</li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
