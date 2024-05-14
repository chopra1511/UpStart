import why1 from '../../assets/why1.png';
import why2 from '../../assets/why2.png';
import why3 from "../../assets/why3.png";

const WhyUpStart = () => {
  return (
    <div className="h-4/5 py-20 sm:py-40 my-40 flex justify-center items-center bg-[#ACAADB]">
      <section className="text-center">
        <h1 className="text-2xl sm:text-4xl font-Poppins font-semibold mb-10">
          Why sell on UpStart
        </h1>
        <div className="flex justify-center flex-col sm:flex-row gap-6">
          <div className="bg-[#fffcf1] rounded-3xl mx-10 sm:m-0 sm:w-1/4 p-10">
            <img src={why1} alt="Zero commissions" />
            <h1 className="text-lg sm:text-2xl font-Poppins font-semibold mt-10 mb-3 text-[#1b1a55]">
              Zero commissions
            </h1>
            <p className="text-sm sm:text-xl font-Quicksand font-semibold text-[#9290C3]">
              Sell & grow your business on UpStart to keep all your profits to
              yourself
            </p>
          </div>
          <div className="bg-[#fffcf1] rounded-3xl mx-10 sm:m-0 sm:w-1/4 p-10">
            <img src={why2} alt="Complete control" />
            <h1 className="text-lg sm:text-2xl font-Poppins font-semibold mt-10 mb-3 text-[#1b1a55]">
              Complete control
            </h1>
            <p className="text-sm sm:text-xl font-Quicksand font-semibold text-[#9290C3]">
              Get complete access and control of your brand, orders and customer
              details
            </p>
          </div>
          <div className="bg-[#fffcf1] rounded-3xl mx-10 sm:m-0 sm:w-1/4 p-10">
            <img src={why3} alt="Engage with customers" />
            <h1 className="text-lg sm:text-2xl font-Poppins font-semibold mt-10 mb-3 text-[#1b1a55]">
              Engage with customers
            </h1>
            <p className="text-sm sm:text-xl font-Quicksand font-semibold text-[#9290C3]">
              Share customised items, answer their queries and more via UpStart
              chat
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyUpStart
