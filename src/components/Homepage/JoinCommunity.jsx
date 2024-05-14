import Button from "@mui/material/Button";
import fbJoin from '../../assets/fbJoin.png'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const JoinCommunity = () => {
  return (
    <div className="flex justify-center bg-[#fffae8]">
      <section className="sm:w-2/3 m-10 sm:m-40 text-center sm:text-left flex justify-center bg-[#fde173] text-[#655209] rounded-3xl">
        <div className="py-10 sm:py-20 sm:pl-20 w-2/3">
          <h1 className="text-3xl sm:text-4xl font-Poppins font-semibold mb-3">
            Join the UpStart sellers community on facebook
          </h1>
          <ul className="text-left text-xl sm:text-2xl font-Quicksand font-semibold sm:leading-loose mb-3">
            <li className="flex items-center gap-2 mb-3 sm:mb-0">
              <CheckCircleIcon />
              Find answers to your questions
            </li>
            <li className="flex items-center gap-2 mb-3 sm:mb-0">
              <CheckCircleIcon />
              Collaborate and cocreate
            </li>
            <li className="flex items-center gap-2 mb-3 sm:mb-0">
              <CheckCircleIcon />
              Discover brands like yourself
            </li>
          </ul>
          <Button
            variant="contained"
            size="large"
            sx={{
              fontFamily: "Poppins",
              textTransform: "capitalize",
              padding: 3,
              color: "#655209",
              borderRadius: 10,
              fontWeight: "bold",
              backgroundColor: "#ffffff",
              ":hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Apply to join us
          </Button>
        </div>
        <div className="hidden sm:block">
          <img src={fbJoin} alt="fbJoin" />
        </div>
      </section>
    </div>
  );
};

export default JoinCommunity;
