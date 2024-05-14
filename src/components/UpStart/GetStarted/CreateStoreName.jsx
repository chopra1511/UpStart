import Button from "@mui/material/Button";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import { useState } from "react";
import StoreDomain from "./CreateStoreDomain";

const CreateStoreName = () => {
  const [domainName, setDomainName] = useState(true);
  return (
    <div>
      {domainName && (
        <div className="flex flex-col justify-center items-left w-80 h-full">
          <div className="mb-5">
            <h1 className="text-xl sm:text-2xl font-Poppins font-semibold">
              Enter your store name
            </h1>
          </div>
          <div className="w-full mb-5 ">
            <form
              className="flex flex-col gap-4 text-left"
              onSubmit={() => {
                setDomainName(false);
              }}
            >
              <input
                type="text"
                placeholder="Your Store Name"
                className="py-4 px-4 rounded-xl border-2 border-[#e0e0e0] w-full font-Quicksand font-semibold"
                required
              />

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
                Next
              </Button>
            </form>
            <div className="flex justify-center items-center mt-3">
              <TipsAndUpdatesRoundedIcon
                sx={{ fontSize: 15, color: "#fde173" }}
                className="drop-shadow-lg mr-2"
              />
              <p className="text-center font-Quicksand text-sm">
                You can change it later in settings
              </p>
            </div>
          </div>
        </div>
      )}
      {!domainName && <StoreDomain />}
    </div>
  );
};

export default CreateStoreName;
