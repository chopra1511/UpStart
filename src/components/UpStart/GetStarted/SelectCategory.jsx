import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router";

const SelectCategory = () => {
  const categoryList = [
    "Personal Care",
    "Pet Care",
    "Jewellery",
    "Home and Decor",
    "Bakery",
    "Sancks and Beverages",
    "Beauty",
    "Electronics",
    ];
    
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 5; // Number of categories to display initially

    const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center h-full w-96">
        <div className=" flex flex-col items-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-Poppins font-semibold sm:mb-3">
            Choose your category
          </h1>
          <p className=" text-sm font-Quicksand font-semibold">
            Select a category that best defines what your store offers to your
            customers.
          </p>
        </div>
        <div className="h-80 sm:h-96 mb-5 sm:mb-10 overflow-y-auto sm:px-10">
          {categoryList
            .slice(0, showAll ? categoryList.length : initialDisplayCount)
            .map((category) => (
              <div className="mb-2 sm:mb-5 text-left" key={category}>
                <FormControlLabel control={<Checkbox />} label={category}/>
              </div>
            ))}
          {!showAll && (
            <button
              className="text-center text-sm font-Poppins font-semibold text-[#4c4efb]"
              onClick={() => {
                setShowAll(true);
              }}
            >
              View More
            </button>
          )}
          {showAll && (
            <button
              className="text-center text-sm font-Poppins font-semibold text-[#4c4efb]"
              onClick={() => {
                setShowAll(false);
              }}
            >
              View Less
            </button>
          )}
        </div>
        <Button
          variant="contained"
          size="large"
                  type="submit"
                  onClick={() => {navigate("/UpStart/get-started/category");}}
          sx={{
            fontFamily: "Poppins",
            textTransform: "capitalize",
            backgroundColor: "#43955f",
            ":hover": {
              backgroundColor: "#2e7d32",
            },
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default SelectCategory;
