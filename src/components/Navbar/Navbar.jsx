import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  return (
    <div className="m-5 p-5 sm:px-10" id="home">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="sm:mb-2 text-4xl sm:text-5xl font-Poppins font-extrabold text-[#070F2B]">
            UpStart
          </h1>
          <p className="pl-2 font-Poppins font-bold text-[#535C91]">
            For Seller
          </p>
        </div>
        <div className="sm:hidden">
          <IconButton>
            <MenuIcon sx={{ color: "black", fontSize: 30 }} />
          </IconButton>
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-10 items-center font-Poppins">
            <li className="hover:text-[#535C91] hover:cursor-pointer">
              why UpStart
            </li>
            <li className="hover:text-[#535C91] hover:cursor-pointer">
              Features
            </li>
            <li className="hover:text-[#535C91] hover:cursor-pointer">
              Community
            </li>
            <li className="hover:text-[#535C91] hover:cursor-pointer">FAQs</li>
            <li className="hover:text-[#535C91] hover:cursor-pointer">
              Resources
            </li>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Poppins",
                textTransform: "capitalize",
                backgroundColor: "#43955f",
                ":hover": {
                  backgroundColor: "#2e7d32",
                },
              }}
            >
              Download App
            </Button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
