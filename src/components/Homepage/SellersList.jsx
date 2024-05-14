import Marquee from "react-fast-marquee";
import Brand1 from "../../assets/b.jpg";
import Brand2 from '../../assets/b1.jpg';
import Brand3 from '../../assets/b2.jpg';
import Brand4 from '../../assets/b4.jpg';
import Brand5 from "../../assets/b5.jpg";


const SellersList = () => {
  return (
    <div className="h-4/5 my-40">
      <section className="flex justify-center items-center flex-col">
        <h1 className="text-xl text-center mx-5 sm:text-3xl font-Poppins ">
          Check out some{" "}
          <span className="font-Caveat text-4xl text-[#9290C3]">
            amazing sellers{" "}
          </span>
          using UpStart
        </h1>
        <div>
          <Marquee speed={80} className="mx-5 w-[25rem] sm:w-[80rem] p-10">
            <img
              src={Brand1}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48 mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
            <img
              src={Brand2}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48 mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
            <img
              src={Brand3}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48 mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
            <img
              src={Brand4}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48 mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
            <img
              src={Brand5}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48 mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
          </Marquee>
          <Marquee
            speed={70}
            direction="right"
            className="mx-5 w-[25rem] sm:w-[80rem] my-10"
          >
            <img
              src={Brand5}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48  mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
            <img
              src={Brand4}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48  mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
            <img
              src={Brand3}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48  mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
            <img
              src={Brand2}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48  mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
            <img
              src={Brand1}
              alt="Seller Img"
              className="w-32 h-32 sm:w-48 sm:h-48  mx-10 hover:cursor-pointer hover:drop-shadow-lg"
            />
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default SellersList;
