import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router";

const CreateStoreDomain = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-left w-80 h-full">
        <div className="mb-5">
          <h1 className="text-xl sm:text-2xl font-Poppins font-semibold">
            Enter your store name
            <span className="text-lg sm:text-xl font-normal">
              {" "}
              for customers to find your store
            </span>
          </h1>
        </div>
        <div className="w-full mb-5 ">
          <form className="flex flex-col gap-4 text-left" onSubmit={() => {navigate("/UpStart/get-started/store-name");}}>
            <div className="flex justify-between py-4 px-4 relative rounded-xl border-2 border-[#e0e0e0] w-full">
              <input
                type="text"
                placeholder="Your Store Name"
                className=" font-Quicksand font-semibold outline-none"
                required
              />
              <span className="">
                .store{" "}
                <CheckCircleRoundedIcon
                  fontSize="small"
                  sx={{ color: "#43955f" }}
                />
              </span>
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
              Confirm
            </Button>
          </form>
          <p className="text-center mt-2 font-Quicksand text-sm">
            👉 You can't change this link later
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateStoreDomain;
