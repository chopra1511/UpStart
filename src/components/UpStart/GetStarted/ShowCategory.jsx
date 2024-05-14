import cart from '../../../assets/Cart.png'
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import Button from "@mui/material/Button";
import StoreIcon from "@mui/icons-material/Store";

const ShowCategory = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <section className="sm:h-2/3 flex justify-center flex-col sm:flex-row items-center gap-10 ">
        <div className="h-full flex items-center">
          <img src={cart} alt="Login" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center items-center text-center h-full w-96 sm:w-1/3">
          <div className=" flex flex-col items-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-Poppins font-semibold">
              Great! Customers will see what your Store offers
            </h1>
          </div>
          <div className="w-full mb-2 flex justify-between items-center py-4 px-4 rounded-xl border-2 border-[#e0e0e0]">
            <h1 className="text-xl font-Poppins font-semibold text-[#0037c0]">
              Jewellery
            </h1>
            <StoreIcon sx={{ color: "#0037c0", fontSize: 30 }} />
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
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              
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
      </section>
    </div>
  );
}

export default ShowCategory
