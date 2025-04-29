import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/CategoriSlice";

const Categori = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log("categories");

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="w-1/6 bg-gray-100 p-4 max-h-screen ">
      <div className="border-b pb-2 text-xl font-bold">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-l px-2 cursor-pointer hover:bg-gray-200 p-2 "
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categori;
