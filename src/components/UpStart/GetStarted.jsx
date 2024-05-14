import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";
import Button from "@mui/material/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { useNavigate } from "react-router";


const GetStarted = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-evenly items-center flex-col">
      <div className=" flex flex-col items-center">
        <h1 className="sm:mb-2 text-4xl sm:text-6xl font-Poppins font-extrabold text-[#070F2B]">
          UpStart
        </h1>
        <p className="pl-2 text-xl font-Poppins font-bold text-[#535C91]">
          For Seller
        </p>
      </div>
      <div className="w-80 sm:w-1/4">
        <Carousel
          useKeyboardArrows={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          autoPlay
          infiniteLoop
          renderIndicator={(onClickHandler, isSelected) => {
            const defStyle = {
              marginLeft: 20,
              color: "#7AC091",
              cursor: "pointer",
            };
            const style = isSelected
              ? { ...defStyle, color: "Green" }
              : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                role="button"
              >
                <CircleRoundedIcon sx={{ fontSize: 10 }} />
              </span>
            );
          }}
        >
          <div className="mb-20">
            <img alt="sample_file" src={why1} />
            <div>
              <h1 className="mt-5 sm:mt-10 text-xl sm:text-2xl font-Poppins font-semibold">
                Zero commisions
              </h1>
              <p className="px-10 sm:px-20 text-md sm:text-xl font-Quicksand font-semibold">
                Not now, not ever
                <br /> ( we promise! )
              </p>
            </div>
          </div>
          <div className="slide">
            <img alt="sample_file" src={why2} />
            <div>
              <h1 className="mt-5 sm:mt-10 text-xl sm:text-2xl font-Poppins font-semibold">
                Complete control
              </h1>
              <p className="px-10 sm:px-20 text-md sm:text-xl font-Quicksand font-semibold">
                Your customers, your rules, your brand
              </p>
            </div>
          </div>
          <div className="slide">
            <img alt="sample_file" src={why3} />
            <div>
              <h1 className="mt-5 sm:mt-10 text-xl sm:text-2xl font-Poppins font-semibold">
                Engage with customers
              </h1>
              <p className="px-10 sm:px-20 text-md sm:text-xl font-Quicksand font-semibold">
                Communicate, delight, and retain
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          navigate("/UpStart/get-started/loginpage");
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
        Get Started
      </Button>
    </div>
  );
};

export default GetStarted;
