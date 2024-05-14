import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";
import Coloredseparator from '../../assets/Colored-separator.png'
import Button from "@mui/material/Button";

const Muchmore = () => {
  return (
    <div className="my-40">
      <section className="flex justify-center items-center flex-col">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-Poppins sm:leading-loose">
            And much more...
          </h1>
          <img src={Coloredseparator} alt="border" className="w-1/2 sm:w-1/3" />
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <img src={a1} alt="AD" className="w-96 sm:w-2/5" />
          <img src={a2} alt="AD" className="w-96 sm:w-2/5" />
          <img src={a3} alt="AD" className="w-96 sm:w-2/5" />
          <img src={a4} alt="AD" className="w-96 sm:w-2/5" />
        </div>
        <Button
          variant="contained"
          size="large"
          sx={{
            fontFamily: "Poppins",
            textTransform: "capitalize",
            padding: 2,
            borderRadius: 4,
            backgroundColor: "#43955f",
            ":hover": {
              backgroundColor: "#2e7d32",
            },
          }}
        >
          Download UpStart To Explore
        </Button>
      </section>
    </div>
  );
};

export default Muchmore;
