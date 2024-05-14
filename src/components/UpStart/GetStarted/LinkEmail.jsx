import React from 'react'
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from 'react-router';


const LinkEmail = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-left w-80 h-full">
        <div className="mb-5">
          <h1 className="text-xl sm:text-2xl font-Poppins font-semibold">
            Add business email
            <span className="text-lg sm:text-xl font-normal"> to link to your store</span>
          </h1>
        </div>
        <div className="w-full mb-5 ">
          <form className="flex flex-col gap-4 text-left" onSubmit={() => {navigate("/UpStart/get-started/store-category");}}>
            <div>
              <input
                type="email"
                placeholder="Email ID"
                className=" font-Quicksand font-semibold py-4 px-4 relative rounded-xl border-2 border-[#e0e0e0] w-full outline-none"
                required
              />
              <p className="text-center mt-2 font-Quicksand text-sm">
                <Checkbox color="success" required/> I accept the{" "}
                <span className="text-[#43955f] underline hover:cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>

            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                fontFamily: "Poppins",
                textTransform: "capitalize",
                backgroundColor: "#43955f",
                ":hover": {
                  backgroundColor: "#2e7d32",
                },
              }}
            >
              Save & continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LinkEmail
