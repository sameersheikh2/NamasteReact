import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { addItem } from "../store/cartSlice";

const MenuItemsCard = ({ items }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (items) => {
    dispatch(addItem(items));
  };

  return (
    <div className="flex">
      <div className="flex flex-wrap justify-between items-center m-auto border-b-[1px] my-7 p-5 w-[620px] ">
        <div className="flex flex-col w-[25rem] ">
          <span>
            <RadioButtonCheckedIcon
              style={{
                fontSize: "17px",
                color:
                  items?.attributes?.vegClassifier == "VEG" ? "green" : "red",
                marginBottom: "4px",
              }}
            />
          </span>
          <h1 className="text-lg font-semibold">{items?.name}</h1>
          <h1>₹{items?.price / 100}</h1>
          <p className="text-sm text-gray-500">{items?.description}</p>
        </div>
        <div className="relative">
          <img
            className="w-[140px] h-[100px] rounded-lg"
            src={IMG_CDN_URL + items?.cloudinaryImageId}
            alt={items?.name}
          />
          <button
            className="w-24 absolute top-[80px] py-2 text-green-600 text-xs font-semibold left-[28px] border-[1px] border-gray-400 bg-white hover:shadow-xl duration-200 ease"
            onClick={() => addToCartHandler(items)}
          >
            ADD+
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemsCard;
