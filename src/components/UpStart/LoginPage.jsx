import LoginPic from "../../assets/login.png";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";

import Login from "../UpStart/Login";
import { useState } from "react";

const LoginPage = () => {
    const [login, setLogin] = useState(true)
    console.log(login);
    return (
      <>
        {login && (
          <div className="h-screen flex justify-center items-center">
            <section className="sm:w-2/3 sm:h-2/3 flex justify-evenly flex-col sm:flex-row items-center gap-10">
              <div className="h-full flex items-center">
                <img src={LoginPic} alt="Login" className="w-80 h-80 sm:w-96 sm:h-96" />
              </div>
              <div className="flex flex-col justify-center items-center text-center h-full">
                <div className="flex flex-col items-center mb-20 hidden sm:block">
                  <h1 className="sm:mb-2 text-4xl sm:text-6xl font-Poppins font-extrabold text-[#070F2B]">
                    UpStart
                  </h1>
                  <p className="pl-2 text-xl font-Poppins font-bold text-[#0037c0]">
                    For Seller
                  </p>
                </div>
                <div className="mb-5">
                  <h1 className="text-xl sm:text-2xl font-Poppins font-semibold">
                    Let's start creating your account
                  </h1>
                  <p className="text-sm font-Quicksand font-medium">
                    Add Email and Password and link to your store
                  </p>
                </div>
                <div className="w-full mb-2 flex justify-between items-center py-4 px-4 rounded-xl border-2 border-[#e0e0e0]">
                  <h1 className="text-xl font-Poppins font-semibold text-[#0037c0]">
                    Add your credentials
                  </h1>
                  <IconButton
                    onClick={() => {
                      setLogin(false)
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
                    You can use this to Login to your store
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
        {!login && <Login />}
      </>
    );
};

export default LoginPage;
