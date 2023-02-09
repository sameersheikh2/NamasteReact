import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantBy } from "../store/FetchRestaurantSlice";
import {
  ALL_RESTAURANT,
  RESTAURANT_SORTBY_DELIVERY,
  RESTAURANT_SORTBY_RATING,
  RESTAURANT_SORTBY_LOW2HIGH,
  RESTAURANT_SORTBY_HIGH2LOW,
} from "../constants";

const Filter = () => {
  const sortByValue = useSelector((state) => state.fetchBy.fetchBy);
  const dispatch = useDispatch();
  const sortByHandler = (value) => {
    dispatch(fetchRestaurantBy(value));
  };

  return (
    <ul className="flex flew-wrap justify-end border-b border-b-gray-400 items-center mx-14 pb-2">
      <li className="mr-2 font-semibold">Sort by:</li>
      <li
        className={
          sortByValue == ALL_RESTAURANT
            ? "mr-5 text-lg text-white hover:text-white cursor-pointer bg-[#c56e33] p-1 rounded"
            : "mr-5 text-lg text-gray-600 hover:text-black cursor-pointer"
        }
        onClick={() => sortByHandler(ALL_RESTAURANT)}
      >
        Relevance
      </li>
      <li
        className={
          sortByValue == RESTAURANT_SORTBY_DELIVERY
            ? "mr-5 text-lg text-white hover:text-white cursor-pointer bg-[#c56e33] p-1 rounded"
            : "mr-5 text-lg text-gray-600 hover:text-black cursor-pointer"
        }
        onClick={() => sortByHandler(RESTAURANT_SORTBY_DELIVERY)}
      >
        Delivery Time
      </li>
      <li
        className={
          sortByValue == RESTAURANT_SORTBY_RATING
            ? "mr-5 text-lg text-white hover:text-white cursor-pointer bg-[#c56e33] p-1 rounded"
            : "mr-5 text-lg text-gray-600 hover:text-black cursor-pointer"
        }
        onClick={() => sortByHandler(RESTAURANT_SORTBY_RATING)}
      >
        Rating
      </li>
      <li
        className={
          sortByValue == RESTAURANT_SORTBY_LOW2HIGH
            ? "mr-5 text-lg text-white hover:text-white cursor-pointer bg-[#c56e33] p-1 rounded"
            : "mr-5 text-lg text-gray-600 hover:text-black cursor-pointer"
        }
        onClick={() => sortByHandler(RESTAURANT_SORTBY_LOW2HIGH)}
      >
        Cost: Low To High
      </li>
      <li
        className={
          sortByValue == RESTAURANT_SORTBY_HIGH2LOW
            ? "mr-5 text-lg text-white hover:text-white cursor-pointer bg-[#c56e33] p-1 rounded"
            : "mr-5 text-lg text-gray-600 hover:text-black cursor-pointer"
        }
        onClick={() => sortByHandler(RESTAURANT_SORTBY_HIGH2LOW)}
      >
        Cost: High To Low
      </li>
    </ul>
  );
};

export default Filter;
