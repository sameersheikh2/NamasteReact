const Filter = () => {
  return (
    <ul className="flex flew-wrap justify-end border-b border-b-gray-400 items-center mx-14 pb-2">
      <li className="mr-2 font-semibold">Sort by:</li>
      <li className="mr-5 text-lg text-gray-600 hover:text-black cursor-pointer">
        Relevance
      </li>
      <li className="mr-5 text-lg text-gray-600 hover:text-black cursor-pointer ">
        Delivery Time
      </li>
      <li className="mr-5 text-lg text-gray-600 hover:text-black cursor-pointer ">
        Rating
      </li>
      <li className="mr-5 text-lg text-gray-600 hover:text-black cursor-pointer ">
        Cost: Low To High
      </li>
      <li className="mr-5 text-lg text-gray-600 hover:text-black cursor-pointer ">
        Cost: High To Low
      </li>
    </ul>
  );
};

export default Filter;
