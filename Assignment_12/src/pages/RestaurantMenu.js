// import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import MenuItemsCard from "../components/MenuItemsCard";
import { IMG_CDN_URL } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PercentIcon from "@mui/icons-material/Percent";
import Shimmer from "../components/Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurantMenu(id);
  const {
    locality,
    area,
    avgRatingString,
    cloudinaryImageId,
    costForTwoMsg,
    name,
    totalRatingsString,
  } = restaurant;
  return (
    <div>
      {restaurant === 404 && <Navigate to="/" />}
      <div className="flex mt-4 md:w-full w-auto md:flex-row flex-col p-9 items-center justify-center bg-black/80">
        {restaurant.length == 0 ? (
          <Shimmer num={3} />
        ) : (
          <>
            <div className="mr-10">
              <img
                className="rounded w-64"
                src={IMG_CDN_URL + cloudinaryImageId}
                alt="img"
              />
            </div>
            <div className="flex flex-col justify-evenly md:items-start items-center h-[200px]">
              <h1 className="text-4xl text-white">{name}</h1>
              <span className="text-gray-300 text-lg">
                {locality}, {area}
              </span>
              <span className="text-gray-300 text-lg">
                {!restaurant && restaurant?.cuisines.join(", ")}
              </span>
              <div className="flex justify-evenly items-center border-b-[1px] pb-3 text-white font-semibold border-b-gray-400 gap-x-8">
                <span className="mr-1">
                  ⭐ {avgRatingString} {totalRatingsString}
                </span>
                <span className="mt-1 text-sm">
                  {restaurant?.sla?.slaString} Delivery Time
                </span>
                <span className="mt-1 text-sm"> {costForTwoMsg}</span>
              </div>
            </div>
            <div className="lg:flex hidden flex-col gap-3 ml-5 border-white border-[1px] p-4 text-white font-semibold w-[20rem]">
              <h2>
                <LocalOfferIcon
                  style={{
                    color: "white",
                    fontSize: "17px",
                    margin: "0 4px 4px 0",
                  }}
                />
                OFFER
              </h2>
              <span>
                <PercentIcon
                  style={{
                    color: "black",
                    fontSize: "20px",
                    padding: "2px",
                    borderRadius: "50%",
                    margin: "0 4px 4px 0",
                    backgroundColor: "white",
                  }}
                />
                {restaurant?.aggregatedDiscountInfo?.descriptionList[0]?.meta}
              </span>
              <span>
                <PercentIcon
                  style={{
                    color: "black",
                    fontSize: "20px",
                    padding: "2px",
                    borderRadius: "50%",
                    margin: "0 4px 4px 0",
                    backgroundColor: "white",
                  }}
                />
                {restaurant?.aggregatedDiscountInfo?.descriptionList[1]?.meta}
              </span>
            </div>
          </>
        )}
      </div>
      {restaurant.length !== 0 && restaurant !== 404
        ? Object.values(restaurant?.menu?.items).map((items) => (
            <MenuItemsCard key={items.id} items={items} />
          ))
        : null}
    </div>
  );
};

export default RestaurantMenu;
