import Navbar from "../Navbar/Navbar";
import Button from "@mui/material/Button";
import playstoreIcon from "../../assets/playstore.png";
import appstoreIcon from "../../assets/appstore.png";
import phoneMockup from "../../assets/phone.png";
import SellersList from "./SellersList";
import WhyUpStart from "./WhyUpStart";
import Muchmore from "./Muchmore";
import JoinCommunity from "./JoinCommunity";
import Questions from "./Questions";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <section className="flex justify-between items-center flex-col sm:flex-row mb-40">
        <div className="sm:w-3/6 p-10 sm:ml-10 text-center sm:text-left">
          <h1 className="text-2xl sm:text-5xl font-Poppins font-bold text-[#1B1A55] sm:mb-5">
            Launch your store online
          </h1>
          <h1 className="text-2xl sm:text-5xl font-Poppins font-bold text-[#9290C3] mb-5">
            with zero commissions
          </h1>
          <p className="text-xl font-Quicksand mb-5">
            Leverage the
            <span className="font-bold text-[#1B1A55] font-Caveat">
              {" "}
              UpStart platform
            </span>{" "}
            to deliver a
            <span className="font-bold text-[#1B1A55] font-Caveat">
              {" "}
              best-in-class D2C
            </span>{" "}
            shopping experience to customers.
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              navigate("/get-started");
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
            Start selling on UpStart
          </Button>
          <div className="flex justify-center sm:justify-start items-center mt-5 gap-4">
            <img
              src={playstoreIcon}
              alt="Play Store Icon"
              className="w-32 sm:w-40"
            />
            <img
              src={appstoreIcon}
              alt="App Store Icon"
              className="w-32 sm:w-40"
            />
          </div>
        </div>
        <div className="relative">
          <div className="w-[20rem] h-[28rem] sm:w-[45rem] sm:h-[38rem] sm:px-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-3xl rounded-r-lg rounded-l-full"></div>
          <img
            src={phoneMockup}
            alt="Phone Mockup Image"
            className="h-[28rem] sm:h-[38rem] absolute top-0 sm:right-[7rem]"
          />
        </div>
      </section>
      <SellersList />
      <WhyUpStart />
      <Muchmore />
      <JoinCommunity />
      <Questions />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default HomePage;
