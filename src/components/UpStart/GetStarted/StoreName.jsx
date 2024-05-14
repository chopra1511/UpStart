import storeName from "../../../assets/storename.png";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import Button from "@mui/material/Button";
import { useState } from "react";
import LinkEmail from "./LinkEmail";

const StoreName = () => {
  const [linkEmail, setLinkEmail] = useState(true);
  return (
    <div className="h-screen flex justify-center items-center">
      <section className="sm:w-full sm:h-2/3 flex justify-center flex-col sm:flex-row items-center ">
        <div className="h-full flex items-center">
          <img src={storeName} alt="Login" className="w-full h-80 sm:h-96" />
        </div>
        {linkEmail && (
          <div className="flex flex-col justify-center items-center text-center h-full  w-96 sm:w-1/3">
            <div className=" flex flex-col items-center mb-10 sm:mb-20">
              <h1 className="text-xl sm:text-3xl font-Poppins font-bold text-[#070F2B]">
                Congrats! Here's how customers will find you
              </h1>
            </div>
            <div className="w-full mb-5 text-left border-2 rounded-xl p-3">
              <div className="border-b-2 pb-3">
                <h1 className="text-lg sm:text-xl font-Poppins font-semibold">Parakh</h1>
                <p className="text-sm font-Quicksand">Your Store name</p>
              </div>
              <div className="pt-3">
                <h1 className="text-lg sm:text-xl font-Poppins font-semibold">
                  Parakh.store{" "}
                  <LockRoundedIcon fontSize="small" color="success" />{" "}
                </h1>
                <p className="text-sm font-Quicksand">
                  Complete next steps to share this link
                </p>
              </div>
            </div>
            <div className="flex items-center mb-10">
              <TipsAndUpdatesRoundedIcon
                sx={{ fontSize: 15, color: "#fde173" }}
                className="drop-shadow-lg"
              />
              <p className="text-sm font-Quicksand font-medium pl-2">
                You can use this to Login to your store
              </p>
            </div>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setLinkEmail(false);
              }}
              sx={{
                fontFamily: "Poppins",
                textTransform: "capitalize",
                backgroundColor: "#43955f",
                ":hover": {
                  backgroundColor: "#2e7d32",
                },
              }}
            >
              Proceed to next step
            </Button>
          </div>
        )}
        {!linkEmail && <LinkEmail />}
      </section>
    </div>
  );
};

export default StoreName;
