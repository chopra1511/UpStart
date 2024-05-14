import categoryPic from "../../../assets/category.png";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import { useState } from "react";
import SelectCategory from "./SelectCategory";

const Category = () => {
  const [category, setCategory] = useState(true);
  return (
    <div className="h-screen flex justify-center items-center">
      <section className="w-full sm:h-2/3 flex justify-center flex-col sm:flex-row items-center ">
        <div className="h-full flex items-center">
          <img src={categoryPic} alt="Login" className="w-auto h-auto sm:h-96" />
        </div>
        {category && (
          <div className="flex flex-col justify-center items-center text-center h-full sm:w-1/3">
            <div className=" flex flex-col items-center mb-10">
              <h1 className="text-2xl sm:text-3xl font-Poppins font-semibold">
                What do you sell?
              </h1>
              <p className="text-sm font-Quicksand">
                Help customers understand what your store offers
              </p>
            </div>
            <div className="w-full mb-2 flex justify-between items-center py-4 px-4 rounded-xl border-2 border-[#e0e0e0]">
              <h1 className="text-xl font-Poppins font-semibold text-[#0037c0]">
                Choose your category
              </h1>
              <IconButton
                onClick={() => {
                  setCategory(false);
                }}
              >
                <ArrowCircleRightRoundedIcon
                  sx={{ color: "#0037c0", fontSize: 30 }}
                />
              </IconButton>
            </div>
            <div className="flex items-center mb-10">
              <TipsAndUpdatesRoundedIcon
                sx={{ fontSize: 15, color: "#fde173" }}
                className="drop-shadow-lg"
              />
              <p className="text-sm font-Quicksand font-medium pl-2">
                You can always change your category in Settings
              </p>
            </div>
          </div>
        )}
        {!category && <SelectCategory />}
      </section>
    </div>
  );
};

export default Category;
