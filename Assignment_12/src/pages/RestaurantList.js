import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const RestaurantList = ({
  name,
  cuisines,
  cloudinaryImageId,
  id,
  costForTwoString,
  deliveryTime,
  avgRating,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="w-[265px] hover:border-[1px] hover:border-black p-2 hover:shadow-xl m-4 rounded hover:scale-105 cursor-pointer duration-150 ease">
      <Link to={"/restaurant/" + id}>
        <img
          className="rounded"
          src={IMG_CDN_URL + cloudinaryImageId}
          width="100%"
          alt="img"
        />
        <div className="flex flex-col justify-between h-fit m-2">
          <h2 className="text-xl font-semibold mb-1">{name}</h2>
          <span className="text-sm text-gray-600 mb-1">
            {cuisines.slice(0, 6).join(", ")}
          </span>
          <div>
            <div className="flex justify-between border-b-[1px] pb-3 border-b-gray-400">
              <span
                className={
                  avgRating < 4
                    ? "mt-3 text-sm rounded text-white bg-[#db7c38] px-1 text-center"
                    : "mt-3 text-sm rounded text-white bg-green-500 px-1 text-center"
                }
              >
                <StarIcon
                  style={{
                    fontSize: "17px",
                    color: "white",
                    marginBottom: "4px",
                  }}
                />
                {avgRating}
              </span>
              <span className="mt-3 text-sm">| {deliveryTime} minutes</span>
              <span className="mt-3 text-sm">| {costForTwoString}</span>
            </div>
            <div className="pt-3 text-sm  text-[#c56e33] font-medium">
              <span>
                <LocalOfferIcon
                  style={{
                    fontSize: "17px",
                    margin: "0 4px 4px 0",
                  }}
                />
                {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantList;
