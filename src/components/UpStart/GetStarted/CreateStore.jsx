import IconButton from "@mui/material/IconButton";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import { useState } from "react";
import StoreName from "./CreateStoreName";

const CreateStore = () => {
  const [storeName, setStoreName] = useState(true);
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <section className="sm:w-2/3 sm:h-2/3 flex justify-evenly flex-col sm:flex-row items-center gap-10">
          <div className="h-full flex items-center">
            <img
              src="/src/assets/gif.GIF"
              alt="Login"
              className="w-80 sm:w-96"
            />
          </div>
          {storeName && (
            <div className="flex flex-col justify-center items-center text-center h-full">
              <div className="mb-5">
                <h1 className="text-xl sm:text-2xl font-Poppins font-semibold">
                  Let's start creating your Store
                </h1>
                <p className="text-sm font-Quicksand font-medium">
                  Add name and link to your UpStart store
                </p>
              </div>
              <div className="w-full mb-2 flex justify-between items-center py-4 px-4 rounded-xl border-2 border-[#e0e0e0]">
                <h1 className="text-xl font-Poppins font-semibold text-[#0037c0]">
                  Add your store name
                </h1>
                <IconButton
                  onClick={() => {
                    setStoreName(false);
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    sx={{ color: "#0037c0", fontSize: 30 }}
                  />
                </IconButton>
              </div>
              <div className="flex items-center">
                <TipsAndUpdatesRoundedIcon
                  sx={{ fontSize: 15, color: "#fde173" }}
                  className="drop-shadow-lg"
                />
                <p className="text-sm font-Quicksand font-medium pl-2">
                  You can always change your store name in Settings
                </p>
              </div>
            </div>
          )}
          {!storeName && <StoreName />}
        </section>
      </div>
    </>
  );
};

export default CreateStore;
