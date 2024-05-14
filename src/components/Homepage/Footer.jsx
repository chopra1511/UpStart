import playstoreIcon from "../../assets/playstore.png";
import appstoreIcon from "../../assets/appstore.png";
import store from "../../assets/store.png";
import store1 from "../../assets/store1.png";

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#5c5c91] my-40 relative">
      <section className="p-10 sm:p-20 sm:w-2/3 flex flex-col items-center text-center z-10">
        <h1 className="text-3xl sm:text-5xl font-Poppins font-semibold text-white">
          Start selling online with zero commissions
        </h1>
        <div className="flex items-center mt-5 gap-4">
          <img
            src={playstoreIcon}
            alt="Play Store Icon"
            className="w-28 sm:w-60"
          />
          <img
            src={appstoreIcon}
            alt="App Store Icon"
            className="w-28 sm:w-60"
          />
        </div>
      </section>
      <img
        src={store}
        alt="Store Icon"
        className="absolute right-0 bottom-10 sm:-bottom-20 opacity-50 sm:opacity-100 drop-shadow-xl w-32 sm:w-auto"
      />
      <img
        src={store1}
        alt="Store Icon"
        className="absolute left-0 bottom-20 sm:bottom-1 opacity-50 sm:opacity-100 drop-shadow-xl w-32 sm:w-auto"
      />
    </div>
  );
};

export default Footer;
